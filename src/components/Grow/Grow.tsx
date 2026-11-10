import './Grow.css'
import { useState } from 'react'

const tabs = ['🏪 فروشگاه کوچک', '🏬 فروشگاه بزرگ و چندشعبه', '🏭 مرکز تولید'] as const

export function Grow() {
  const [active, setActive] = useState(0)

  return (
    <section className="sec j5-grow" id="j5-grow">
      <div className="wrap">
        <span className="tag c">با تو بزرگ می‌شه</span>
        <h2 className="ttl">از یه مغازه تا <span className="grad">مرکز تولید</span></h2>
        <div className="j5-tabs" id="j5tabs">
          {tabs.map((label, index) => (
            <button key={label} type="button" className={index === active ? 'on' : undefined} data-i={index} onClick={() => setActive(index)}>
              {label}
            </button>
          ))}
          <i id="j5tabi" />
        </div>
        <div className="j5-gview">
          <div className={active === 0 ? 'j5-g on' : 'j5-g'}>
            <ul>
              <li>سایت + اتصال به مارکت‌پلیس‌ها</li>
              <li>یک انبار با موجودی لحظه‌ای</li>
              <li>حسابداری ساده‌شده با گزارش سود</li>
              <li>دستیار برای کارهای روزمره</li>
            </ul>
            <div className="j5-gv"><div className="j5-node big">🏪<small>مغازه</small></div></div>
          </div>
          <div className={active === 1 ? 'j5-g on' : 'j5-g'}>
            <ul>
              <li>چند شعبه و چند انبار با انتقال بین انبارها</li>
              <li>مراکز هزینه برای هر شعبه</li>
              <li>نقش‌ها و دسترسی کارکنان</li>
              <li>گزارش تلفیقی همهٔ شعبه‌ها</li>
            </ul>
            <div className="j5-gv">
              <div className="j5-node">🏬<small>مرکزی</small></div>
              <div className="j5-node">🏪<small>شعبه ۱</small></div>
              <div className="j5-node">🏪<small>شعبه ۲</small></div>
              <div className="j5-node">📦<small>انبار</small></div>
            </div>
          </div>
          <div className={active === 2 ? 'j5-g on' : 'j5-g'}>
            <ul>
              <li>فرمول ساخت (BOM) و مواد اولیه</li>
              <li>چند انبار: مواد، در جریان ساخت، محصول</li>
              <li>بهای تمام‌شدهٔ تولید و مراکز هزینه</li>
              <li>کسر خودکار مواد اولیه با هر تولید</li>
            </ul>
            <div className="j5-gv j5-bom">
              <div className="j5-node">👟<small>کفش</small></div>
              <div className="j5-bl">
                <span>چرم ۰.۸ م²</span><span>زیره ۱</span><span>نخ ۱۲ م</span><span>بند ۲</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
