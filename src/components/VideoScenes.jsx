import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import { Backdrop, Bunting } from './Jungle'

const DURATION = 25
const SCENES = [
  { start: 0, end: 5 },
  { start: 5, end: 11 },
  { start: 11, end: 16 },
  { start: 16, end: 21 },
  { start: 21, end: 25 },
]
const COLORS = ['#FF8FB8', '#FFD25A', '#7FD1A0', '#7FC8F8', '#C9A7F5', '#FFB36B']

const clamp = (v) => Math.min(1, Math.max(0, v))
const easeOutBack = (x) => {
  const c = 1.70158
  return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2)
}
// scale-in with overshoot, starting at `delay` seconds into the scene
const pop = (lt, delay = 0) => easeOutBack(clamp((lt - delay) / 0.6))
const fade = (lt, len) => Math.min(clamp(lt / 0.4), clamp((len - lt) / 0.4))

function Confetti({ t }) {
  return Array.from({ length: 40 }, (_, i) => {
    const speed = 90 + ((i * 37) % 80)
    const x = (i * 83) % 720
    const y = ((t * speed + i * 61) % 1400) - 60
    return (
      <span
        key={i}
        className="confetti"
        style={{
          left: x + Math.sin(t * 2 + i) * 20,
          top: y,
          background: COLORS[i % COLORS.length],
          transform: `rotate(${t * 120 + i * 40}deg)`,
        }}
      />
    )
  })
}

function Scene({ index, t }) {
  const { start, end } = SCENES[index]
  if (t < start || t >= end) return null
  const lt = t - start
  const len = end - start
  const style = { opacity: fade(lt, len) }
  const bounce = Math.sin(lt * 4) * 8

  if (index === 0) {
    return (
      <div className="vscene" style={style}>
        <p className="v-small" style={{ transform: `scale(${pop(lt)})`, position: 'relative', zIndex: 2 }}>Get ready to celebrate</p>
        <div className="v-one" style={{ transform: `scale(${pop(lt, 0.3)}) rotate(${Math.sin(lt * 3) * 4}deg)` }}>1</div>
        <p className="v-mid" style={{ transform: `scale(${pop(lt, 0.9)})` }}>Evy is turning</p>
        <p className="v-big v-rainbow rainbow" style={{ transform: `scale(${pop(lt, 1.3)})` }}>ONE!</p>
        <span className="v-emoji" style={{ left: 40, top: 880 + bounce, transform: `scale(${pop(lt, 1.8)})` }}>🦁</span>
        <span className="v-emoji" style={{ right: 40, top: 880 - bounce, transform: `scale(${pop(lt, 2.1)})` }}>🐘</span>
        <span className="v-emoji" style={{ left: 60, top: 380 - bounce, transform: `scale(${pop(lt, 2.4)})` }}>🎈</span>
        <span className="v-emoji" style={{ right: 60, top: 380 + bounce, transform: `scale(${pop(lt, 2.7)})` }}>🎈</span>
      </div>
    )
  }
  if (index === 1) {
    return (
      <div className="vscene" style={style}>
        <p className="v-small" style={{ transform: `scale(${pop(lt)})` }}>You are invited to</p>
        <div className="v-photo" style={{ transform: `scale(${pop(lt, 0.4)}) rotate(${Math.sin(lt * 2) * 2}deg)` }}>
          <img src="/images/evy.jpg" alt="" />
        </div>
        <p className="v-big" style={{ transform: `scale(${pop(lt, 1.2)})` }}>
          <span className="c1">Evy’s</span> <span className="c2">1st</span>
        </p>
        <p className="v-big c3" style={{ transform: `scale(${pop(lt, 1.6)})` }}>Birthday!</p>
        <span className="v-emoji" style={{ left: 30, top: 560 + bounce, transform: `scale(${pop(lt, 2)})` }}>🐒</span>
        <span className="v-emoji" style={{ right: 30, top: 560 - bounce, transform: `scale(${pop(lt, 2.3)})` }}>🦜</span>
      </div>
    )
  }
  if (index === 2) {
    return (
      <div className="vscene" style={style}>
        <p className="v-small" style={{ transform: `scale(${pop(lt)})` }}>Save the date</p>
        <div className="v-card peach" style={{ transform: `scale(${pop(lt, 0.3)})` }}>
          <p className="v-mid c4">Friday</p>
          <p className="v-date">27</p>
          <p className="v-mid">November 2026</p>
        </div>
        <span className="v-emoji" style={{ left: 40, top: 900 + bounce, transform: `scale(${pop(lt, 1)})` }}>🦒</span>
        <span className="v-emoji" style={{ right: 40, top: 900 - bounce, transform: `scale(${pop(lt, 1.3)})` }}>🐯</span>
      </div>
    )
  }
  if (index === 3) {
    return (
      <div className="vscene" style={style}>
        <p className="v-small" style={{ transform: `scale(${pop(lt)})` }}>Join us at</p>
        <div className="v-hotel" style={{ transform: `scale(${pop(lt, 0.3)}) rotate(${-2 + Math.sin(lt * 2)}deg)` }}>
          <img src="/images/hotel.jpg" alt="" />
        </div>
        <p className="v-big v-hotel-name c1" style={{ transform: `scale(${pop(lt, 1)})` }}>Hotel Highway King</p>
        <p className="v-small v-addr" style={{ transform: `scale(${pop(lt, 1.3)})` }}>Bilaspur, NH 48, Panchgaon, Gurugram</p>
        <div className="v-time" style={{ transform: `scale(${pop(lt, 1.8)})` }}>Arrival 6:30 PM onwards</div>
      </div>
    )
  }
  return (
    <div className="vscene" style={style}>
      <p className="v-huge rainbow" style={{ transform: `scale(${pop(lt)})` }}>See you<br />there!</p>
      <p className="v-mid" style={{ transform: `scale(${pop(lt, 0.8)})` }}>With Love,</p>
      <p className="v-big c4" style={{ transform: `scale(${pop(lt, 1.1)})` }}>Evy and family</p>
      {['🦁', '🐘', '🐒', '🦒', '🦜', '🐯'].map((e, i) => (
        <span
          key={e}
          className="v-emoji"
          style={{
            left: 40 + (i % 3) * 240,
            top: 880 + Math.floor(i / 3) * 170 + Math.sin(lt * 5 + i) * 10,
            transform: `scale(${pop(lt, 1.4 + i * 0.15)})`,
          }}
        >
          {e}
        </span>
      ))}
    </div>
  )
}

// Deterministic, time-seekable scenes: the render script calls window.setTime(seconds) per frame
export default function VideoScenes() {
  const [t, setT] = useState(0)
  useEffect(() => {
    window.setTime = (v) => flushSync(() => setT(Math.min(v, DURATION)))
    window.sceneReady = true
  }, [])

  return (
    <div className="vstage">
      <Backdrop />
      <div className="vbunting"><Bunting /></div>
      <Confetti t={t} />
      {SCENES.map((_, i) => (
        <Scene key={i} index={i} t={t} />
      ))}
    </div>
  )
}
