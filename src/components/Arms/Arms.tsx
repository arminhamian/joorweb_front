import './Arms.css'
import { useEffect, useState, type CSSProperties } from 'react'
import { fa } from '../../landing/format'
import { isReduced } from '../../landing/reduced'

const bars = ['45%', '60%', '52%', '74%', '68%', '90%']

export function Arms() {
  const [stock, setStock] = useState(29)
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    if (isReduced()) return
    const timer = window.setInterval(() => {
      setStock((current) => (current <= 21 ? 29 : current - 1))
      setFlash(true)
      window.setTimeout(() => setFlash(false), 300)
    }, 2200)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="sec j5-arms" id="j5-arms">
      <div className="wrap">
        <span className="tag c">شش بازو، یک داده</span>
        <h2 className="ttl">هر بخش، <span className="grad">کامل و حرفه‌ای</span></h2>
        <div className="j5-bento">
          <div className="j5-arm j5-a1 tilt">
            <span className="j5-ai">🧾</span>
            <h3>مالی و حسابداری</h3>
            <p>حسابداری کامل مطابق IFRS؛ سود و زیان لحظه‌ای.</p>
            <div className="j5-mbars">
              {bars.map((height) => <i key={height} style={{ '--v': height } as CSSProperties} />)}
            </div>
          </div>
          <div className="j5-arm j5-a2 tilt">
            <span className="j5-ai">📦</span>
            <h3>انبار</h3>
            <p>موجودی لحظه‌ای، چند انبار، ارزیابی FIFO و میانگین موزون.</p>
            <div className="j5-stock">
              <b id="j5stock" className={flash ? 'flash' : undefined}>{fa(stock)}</b>
              <small>کفش مشکی · لحظه‌ای</small>
            </div>
          </div>
          <div className="j5-arm j5-a3 tilt">
            <span className="j5-ai">🛒</span>
            <h3>فروش</h3>
            <p>سایت اختصاصی + دیجی‌کالا، ترب، باسلام.</p>
            <div className="j5-chips j5-live">
              <span>سایت</span><span>دیجی‌کالا</span><span>ترب</span><span>باسلام</span>
            </div>
          </div>
          <div className="j5-arm j5-a4 tilt">
            <span className="j5-ai">📣</span>
            <h3>بازاریابی</h3>
            <p>اینستاگرام، تلگرام و بله از یک جا.</p>
            <div className="j5-sched">
              <span>📸 ۱۰:۰۰</span><span>✈️ ۱۰:۰۵</span><span>💬 ۱۰:۱۰</span>
            </div>
          </div>
          <div className="j5-arm j5-a5 tilt">
            <span className="j5-ai">🚚</span>
            <h3>سفارش‌ها</h3>
            <p>پیگیری خودکار هر سفارش تا تحویل.</p>
            <div className="j5-mtrack"><i /></div>
          </div>
          <div className="j5-arm j5-a6 tilt">
            <span className="j5-ai">✨</span>
            <h3>دستیار هوشمند</h3>
            <p>صفر تا صد پنل رو با صدا یا چت مدیریت می‌کنه.</p>
            <div className="x-vw">
              {Array.from({ length: 16 }, (_, index) => <i key={index} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
