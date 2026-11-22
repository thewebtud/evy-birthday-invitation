// Renders public/media/invitation.mp4 (25s, 720x1280, 25fps) by capturing the #render scenes
// of the app frame by frame, then muxing with a synthesised lullaby.
// Usage: node scripts/make-video.mjs   (needs Chrome installed; ffmpeg comes from ffmpeg-static)
import { execFileSync } from 'node:child_process'
import { mkdtempSync, mkdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import ffmpeg from 'ffmpeg-static'
import { chromium } from 'playwright'
import { createServer } from 'vite'

const FPS = 25
const SECONDS = 25
const OUT = 'public/media'
const tmp = mkdtempSync(join(tmpdir(), 'evy-'))
mkdirSync(OUT, { recursive: true })

const server = await createServer({ server: { port: 5199 }, logLevel: 'error' })
await server.listen()
const browser = await chromium.launch({ channel: 'chrome' })
try {
  const page = await browser.newPage({ viewport: { width: 720, height: 1280 } })
  await page.goto('http://localhost:5199/#render')
  await page.waitForFunction(() => window.sceneReady)
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(500)
  for (let i = 0; i < FPS * SECONDS; i++) {
    await page.evaluate((t) => window.setTime(t), i / FPS)
    await page.screenshot({ path: join(tmp, `f${String(i).padStart(4, '0')}.jpg`), type: 'jpeg', quality: 92 })
  }
} finally {
  await browser.close()
  await server.close()
}

// Music: original twinkle-style melody from sine tones (no licensing), with a soft octave layer
const notes = [[523.25, 0.5], [523.25, 0.5], [783.99, 0.5], [783.99, 0.5], [880, 0.5], [880, 0.5], [783.99, 1],
  [698.46, 0.5], [698.46, 0.5], [659.25, 0.5], [659.25, 0.5], [587.33, 0.5], [587.33, 0.5], [523.25, 1]]
const seq = Array.from({ length: 4 }, () => notes).flat()
const inputs = seq.flatMap(([f, d]) => ['-f', 'lavfi', '-i', `sine=f=${f}:d=${d}:r=44100`])
const filt = seq.map(([, d], i) => `[${i}:a]afade=t=in:d=0.02,afade=t=out:st=${d - 0.15}:d=0.15[a${i}];`).join('')
const chain = seq.map((_, i) => `[a${i}]`).join('')
const run = (args) => execFileSync(ffmpeg, ['-y', '-loglevel', 'error', ...args], { stdio: 'inherit' })
run([...inputs, '-filter_complex', `${filt}${chain}concat=n=${seq.length}:v=0:a=1,atrim=0:${SECONDS},volume=0.35,afade=t=out:st=23:d=2`, '-c:a', 'aac', '-b:a', '128k', join(tmp, 'music.m4a')])
run(['-framerate', String(FPS), '-i', join(tmp, 'f%04d.jpg'), '-i', join(tmp, 'music.m4a'), '-c:v', 'libx264', '-preset', 'slow', '-crf', '24', '-pix_fmt', 'yuv420p', '-c:a', 'copy', '-t', String(SECONDS), '-movflags', '+faststart', `${OUT}/invitation.mp4`])
run(['-i', `${OUT}/invitation.mp4`, '-ss', '7', '-frames:v', '1', '-q:v', '4', `${OUT}/poster.jpg`])
rmSync(tmp, { recursive: true, force: true })
console.log(`Wrote ${OUT}/invitation.mp4`)
