const LEAF = 'M0 0 C 25 -45 85 -45 110 0 C 85 45 25 45 0 0 Z'

function Leaf({ x, y, r, s = 1, fill }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>
      <path d={LEAF} fill={fill} />
      <path d="M5 0 H100" stroke="#fff" strokeOpacity="0.45" strokeWidth="3" fill="none" />
    </g>
  )
}

function Flower({ x, y, c }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <circle key={a} cx="0" cy="-9" r="7" fill={c} transform={`rotate(${a})`} />
      ))}
      <circle r="5" fill="#FFE27A" />
    </g>
  )
}

// Light, cartoon jungle scenery used behind every screen
export function Backdrop() {
  return (
    <svg className="backdrop" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#BDE8FA" />
          <stop offset="0.55" stopColor="#E3F6E4" />
          <stop offset="1" stopColor="#FFF4D6" />
        </linearGradient>
      </defs>
      <rect width="400" height="800" fill="url(#sky)" />
      <g transform="translate(335 70)">
        {Array.from({ length: 12 }, (_, i) => (
          <rect key={i} x="-4" y="-62" width="8" height="22" rx="4" fill="#FFE49A" transform={`rotate(${i * 30})`} />
        ))}
        <circle r="34" fill="#FFD966" />
        <circle cx="-9" cy="-4" r="3" fill="#C98A2B" />
        <circle cx="9" cy="-4" r="3" fill="#C98A2B" />
        <path d="M-10 8 Q0 17 10 8" stroke="#C98A2B" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      <g fill="#fff" opacity="0.9">
        <ellipse cx="90" cy="130" rx="40" ry="16" />
        <ellipse cx="120" cy="118" rx="28" ry="16" />
        <ellipse cx="260" cy="210" rx="36" ry="13" />
        <ellipse cx="285" cy="200" rx="24" ry="13" />
      </g>
      <path d="M0 560 Q100 480 200 540 T400 520 V800 H0Z" fill="#CDEEC2" />
      <path d="M0 640 Q120 570 230 630 T400 610 V800 H0Z" fill="#B4E5A4" />
      <path d="M0 720 Q140 670 260 715 T400 700 V800 H0Z" fill="#9CDB8F" />
      <Leaf x={-10} y={30} r={50} s={1.3} fill="#7FD1A0" />
      <Leaf x={-10} y={30} r={20} s={1.1} fill="#A5E3A0" />
      <Leaf x={-10} y={30} r={80} s={0.9} fill="#5CC08E" />
      <Leaf x={410} y={190} r={140} s={1.2} fill="#8FD8A0" />
      <Leaf x={410} y={190} r={170} s={1} fill="#B5E8A6" />
      <Leaf x={-10} y={600} r={-60} s={1.1} fill="#6CC98F" />
      <Leaf x={-10} y={600} r={-30} s={0.9} fill="#8FDB9D" />
      <Leaf x={410} y={780} r={-130} s={1.2} fill="#6CC98F" />
      <Leaf x={410} y={780} r={-160} s={1} fill="#8FDB9D" />
      <Flower x={40} y={760} c="#FF9EC4" />
      <Flower x={90} y={780} c="#FFB36B" />
      <Flower x={180} y={770} c="#C9A7F5" />
      <Flower x={300} y={775} c="#FF9EC4" />
      <Flower x={350} y={745} c="#7FC8F8" />
    </svg>
  )
}

const FLAGS = ['#FF9EC4', '#FFD966', '#8FD8A0', '#7FC8F8', '#C9A7F5', '#FFB36B']

export function Bunting() {
  return (
    <svg className="bunting" viewBox="0 0 400 70" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 6 Q200 40 400 6" stroke="#B98B5E" strokeWidth="3" fill="none" />
      {Array.from({ length: 9 }, (_, i) => {
        const x = 20 + i * 45
        const y = 6 + 34 * Math.sin((x / 400) * Math.PI) * 0.88
        return <path key={i} d={`M${x - 16} ${y} L${x + 16} ${y} L${x} ${y + 34} Z`} fill={FLAGS[i % FLAGS.length]} />
      })}
    </svg>
  )
}

const ANIMALS = [
  ['🦁', 'a1'],
  ['🐘', 'a2'],
  ['🐒', 'a3'],
  ['🦒', 'a4'],
  ['🦜', 'a5'],
  ['🐯', 'a6'],
]

export function Animals({ only }) {
  return (
    <div className="animals" aria-hidden="true">
      {ANIMALS.filter(([, c]) => !only || only.includes(c)).map(([e, c], i) => (
        <span key={c} className={`animal ${c}`} style={{ animationDelay: `${-i * 0.7}s` }}>
          {e}
        </span>
      ))}
    </div>
  )
}
