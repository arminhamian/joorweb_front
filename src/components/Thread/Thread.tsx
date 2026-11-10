import './Thread.css'
export function Thread() {
  return (
    <svg id="u-thread" aria-hidden="true">
      <defs>
        <linearGradient id="uthg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7c6cff" />
          <stop offset=".5" stopColor="#c04cf2" />
          <stop offset="1" stopColor="#ff3d7f" />
        </linearGradient>
      </defs>
      <path id="u-tbase" />
      <path id="u-tline" />
      <circle id="u-tdot" r="6" />
    </svg>
  )
}
