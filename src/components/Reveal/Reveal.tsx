import './Reveal.css'
import type { CSSProperties } from 'react'
import { revealArms } from '../../landing/data'

const placed = revealArms.map((arm, index) => {
  const angle = ((-90 + index * 60) * Math.PI) / 180
  const x = 50 + 40 * Math.cos(angle)
  const y = 50 + 40 * Math.sin(angle)
  const path = `M50 50 Q ${(50 + x) / 2 + (index % 2 ? 6 : -6)} ${(50 + y) / 2} ${x.toFixed(1)} ${y.toFixed(1)}`
  return { icon: arm[0], name: arm[1], detail: arm[2], hue: arm[3], x, y, path }
})

export function Reveal() {
  return (
    <section className="j5-reveal" id="j5-reveal">
      <div className="j5-rpin">
        <div className="wrap j5-rhead">
          <span className="tag c">بیشتر از چیزی که فکر می‌کنی</span>
          <h2 className="ttl">جوروب <span className="j5-strike">فقط یک فروشگاه‌ساز</span> <span className="grad">نیست</span></h2>
        </div>
        <div className="j5-hub" id="j5hub">
          <svg className="j5-beams" viewBox="0 0 100 100" preserveAspectRatio="none" id="j5beams">
            {placed.map((arm) => <path key={arm.name} d={arm.path} />)}
          </svg>
          <div className="j5-store" id="j5store">
            <span>🛍️</span>
            <b>فروشگاه‌ساز</b>
            <small>جایی که بقیه تموم می‌شن…</small>
          </div>
          <div className="j5-core" id="j5core">
            <span>ج</span>
            <small>دستیار هوشمند</small>
          </div>
          {placed.map((arm) => (
            <div
              key={arm.name}
              className="j5-armn"
              style={{ left: `${arm.x}%`, top: `${arm.y}%`, '--h': arm.hue } as CSSProperties}
            >
              <span>{arm.icon}</span>
              <div><b>{arm.name}</b><small>{arm.detail}</small></div>
            </div>
          ))}
        </div>
        <p className="j5-rcap" id="j5rcap">…جوروب تازه شروع می‌شه: <b>شش بازو، یک داده، یک دستیار.</b></p>
      </div>
    </section>
  )
}
