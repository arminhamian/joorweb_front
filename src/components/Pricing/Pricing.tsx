import './Pricing.css'
import { useEffect, useState } from 'react'
import { plans } from '../../landing/data'
import { moneyThousands } from '../../landing/format'
import { bindTilt } from '../../landing/tilt'

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  useEffect(() => {
    bindTilt(document.getElementById('plans') ?? document)
  }, [yearly])

  return (
    <section className="sec" id="pricing">
      <div className="wrap">
        <h2 className="ttl rv">تعرفه به <span className="grad">اندازهٔ کسب‌وکارت</span></h2>
        <div className="tog rv">
          <span>ماهانه</span>
          <button id="tog" type="button" className={yearly ? 'on' : undefined} aria-label="تغییر دوره" onClick={() => setYearly((value) => !value)}>
            <i />
          </button>
          <span>سالانه <em>۲ ماه رایگان</em></span>
        </div>
        <div className="plans j5-plans" id="plans">
          {plans.map((plan) => (
            <div key={plan.name} className={plan.hot ? 'plan tilt hot' : 'plan tilt'}>
              {plan.hot ? <span className="badge">پیشنهاد ما</span> : null}
              <h4>{plan.name}</h4>
              <small>{plan.desc}</small>
              <div className="price">
                <b>{moneyThousands(yearly ? plan.price * 10 : plan.price)}</b>
                <span>تومان / {yearly ? 'سال' : 'ماه'}</span>
              </div>
              <ul>
                {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a className={plan.hot ? 'btn neon' : 'btn glass'} href="#cta">انتخاب پلن</a>
            </div>
          ))}
        </div>
        <small className="x-sample" style={{ textAlign: 'center' }}>قیمت‌ها نمونه هستند.</small>
      </div>
    </section>
  )
}
