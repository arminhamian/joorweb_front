import './Standards.css'
import { useState } from 'react'
import { cogsLabel, fa } from '../../landing/format'

function quote(quantity: number) {
  const first = Math.min(quantity, 10)
  const second = Math.max(0, quantity - 10)
  const fifo = first * 100 + second * 120
  const average = quantity * 110
  const difference = average - fifo
  const note = difference === 0
    ? 'هر دو روش اینجا نتیجهٔ یکسان دارن.'
    : `اختلاف دو روش: ${cogsLabel(Math.abs(difference))} — جوروب هر دو رو دقیق و خودکار حساب می‌کنه. (قیمت میانگین: ۱۱۰ هزار ت)`
  return { first, second, fifo, average, note }
}

export function Standards() {
  const [quantity, setQuantity] = useState(15)
  const result = quote(quantity)

  return (
    <section className="sec j5-std" id="j5-std">
      <div className="wrap">
        <div className="j5-badges"><span>IFRS</span><span>FIFO</span><span>میانگین موزون</span></div>
        <h2 className="ttl">حسابداری <span className="grad">استاندارد</span>، نه تقریبی</h2>
        <div className="j5-cogs">
          <div className="j5-lots">
            <h4>خریدهای انبار</h4>
            <div className="j5-lot"><b>بچ ۱</b><span>۱۰ عدد × ۱۰۰ هزار ت</span></div>
            <div className="j5-lot"><b>بچ ۲</b><span>۱۰ عدد × ۱۲۰ هزار ت</span></div>
            <label>
              تعداد فروش: <output id="j5qo">{fa(quantity)}</output>
              <input
                type="range"
                id="j5q"
                min={1}
                max={20}
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value))}
              />
            </label>
          </div>
          <div className="j5-res">
            <div className="j5-m">
              <small>FIFO · اولین صادره از اولین وارده</small>
              <b id="j5fifo">{cogsLabel(result.fifo)}</b>
              <div className="j5-split" id="j5fs">
                <i className="a" style={{ width: `${(result.first / 20) * 100}%` }} />
                <i className="b" style={{ width: `${(result.second / 20) * 100}%` }} />
              </div>
            </div>
            <div className="j5-m">
              <small>میانگین موزون</small>
              <b id="j5wa">{cogsLabel(result.average)}</b>
              <div className="j5-split" id="j5ws">
                <i className="c" style={{ width: `${(quantity / 20) * 100}%` }} />
              </div>
            </div>
            <p className="j5-diff" id="j5diff">{result.note}</p>
          </div>
        </div>
        <small className="x-sample" style={{ textAlign: 'center' }}>مثال آموزشی؛ روش ارزیابی در تنظیمات انبار انتخاب می‌شه.</small>
      </div>
    </section>
  )
}
