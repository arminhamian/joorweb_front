import './WhiteLabel.css'
import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { brands } from '../../landing/data'
import { isReduced } from '../../landing/reduced'
import { PhoneForm } from '../PhoneForm/PhoneForm'

type PanelBrand = { name: string; logo: string; c1: string; c2: string; domain: string }

const chart = ['35%', '48%', '44%', '60%', '72%', '68%', '86%', '95%']

function customBrand(name: string, color: string): PanelBrand {
  const trimmed = name.trim() || 'برند من'
  return {
    name: trimmed,
    logo: trimmed.replace(/\s+/g, '').slice(0, 2),
    c1: color,
    c2: `${color}aa`,
    domain: `panel.${trimmed === 'برند من' ? 'mybrand' : 'brand'}.ir`,
  }
}

export function WhiteLabel() {
  const reduced = isReduced()
  const indexRef = useRef(0)
  const [auto, setAuto] = useState(!reduced)
  const [index, setIndex] = useState<number | null>(0)
  const [brand, setBrand] = useState<PanelBrand>(brands[0])
  const [flip, setFlip] = useState(false)
  const [customName, setCustomName] = useState('')
  const [customColor, setCustomColor] = useState('#e5357f')

  function bump() {
    setFlip(false)
    window.requestAnimationFrame(() => setFlip(true))
  }

  function choose(next: number) {
    const preset = brands[next]
    if (!preset) return
    setAuto(false)
    indexRef.current = next
    setIndex(next)
    setBrand(preset)
    bump()
  }

  function applyCustom(name: string, color: string) {
    setAuto(false)
    setIndex(null)
    setBrand(customBrand(name, color))
    bump()
  }

  useEffect(() => {
    if (!auto) return
    const timer = window.setInterval(() => {
      const next = (indexRef.current + 1) % brands.length
      const preset = brands[next]
      if (!preset) return
      indexRef.current = next
      setIndex(next)
      setBrand(preset)
      setFlip(false)
      window.requestAnimationFrame(() => setFlip(true))
    }, 3500)
    return () => window.clearInterval(timer)
  }, [auto])

  return (
    <section
      className="sec u-wl"
      id="u-wl"
      style={{ '--wb': brand.c1, '--wb2': brand.c2 } as CSSProperties}
    >
      <div className="wrap">
        <span className="tag c">پنل نمایندگی White-label</span>
        <h2 className="ttl">جوروب رو با <span className="grad">برند خودت</span> بفروش</h2>
        <div className="u-wgrid">
          <div className="u-wdemo">
            <div className="u-brands" id="ubrands">
              {brands.map((item, itemIndex) => (
                <button
                  key={item.name}
                  type="button"
                  className={index === itemIndex ? 'on' : undefined}
                  style={{ '--c': item.c1 } as CSSProperties}
                  onClick={() => choose(itemIndex)}
                >
                  <i />{item.name}
                </button>
              ))}
              <label>
                برند خودت: <input
                  type="text"
                  id="ucn"
                  placeholder="اسم برند"
                  maxLength={16}
                  value={customName}
                  onChange={(event) => {
                    setCustomName(event.target.value)
                    applyCustom(event.target.value, customColor)
                  }}
                />
                <input
                  type="color"
                  id="ucc"
                  value={customColor}
                  onChange={(event) => {
                    setCustomColor(event.target.value)
                    applyCustom(customName, event.target.value)
                  }}
                />
              </label>
            </div>
            <div className={flip ? 'u-wpanel flip' : 'u-wpanel'} id="uwp">
              <div className="u-wbar">
                <span className="u-wlogo" id="uwlogo">{brand.logo}</span>
                <b id="uwname">{brand.name}</b>
                <span className="u-wdom" id="uwdom">{brand.domain}</span>
              </div>
              <div className="u-wbody">
                <aside>
                  <i className="on">داشبورد</i>
                  <i>مشتری‌ها</i>
                  <i>اشتراک‌ها</i>
                  <i>دامنه‌ها</i>
                  <i>تنظیمات برند</i>
                </aside>
                <div className="u-wmain">
                  <div className="u-wk">
                    <div><small>مشتری فعال</small><b>۱۲۸</b></div>
                    <div><small>درآمد اشتراک ماه</small><b>۷۶م</b></div>
                    <div><small>تمدید</small><b>۹۴٪</b></div>
                  </div>
                  <div className="u-wchart">
                    {chart.map((height) => <i key={height} style={{ '--v': height } as CSSProperties} />)}
                  </div>
                  <div className="u-wbtn">+ ساخت فروشگاه برای مشتری</div>
                </div>
              </div>
            </div>
            <small className="x-sample">برندها و اعداد نمونه هستند.</small>
          </div>
          <div className="u-wcards">
            <div className="u-wc"><span>💰</span><h4>درآمد اشتراک</h4><p>قیمت‌گذاری با خودت؛ هر ماه از تمدید مشتری‌ها درآمد داشته باش.</p></div>
            <div className="u-wc"><span>🌐</span><h4>دامنهٔ اختصاصی</h4><p>پنل و فروشگاه‌ها روی دامنهٔ تو، با SSL خودکار.</p></div>
            <div className="u-wc"><span>🧑‍💼</span><h4>پنل مدیریت مشتری</h4><p>ساخت فروشگاه، مدیریت پلن‌ها و پشتیبانی همه از یک جا.</p></div>
            <div className="u-wc"><span>🎨</span><h4>برند تو، همه‌جا</h4><p>لوگو، رنگ، ایمیل و پیامک‌ها با اسم خودت؛ اسمی از جوروب نیست.</p></div>
            <PhoneForm button="نماینده شو" className="phone u-wform" />
          </div>
        </div>
      </div>
    </section>
  )
}
