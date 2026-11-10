import './Cta.css'
import { PhoneForm } from '../PhoneForm/PhoneForm'

export function Cta() {
  return (
    <section className="sec" id="cta">
      <div className="wrap">
        <div className="ctab tilt rv">
          <div className="cglow" />
          <h2>کل کسب‌وکارت روی یه سیستم. <span className="grad">فقط بگو چی می‌خوای.</span></h2>
          <p>۱۴ روز رایگان، مهاجرت رایگان، بدون قرارداد.</p>
          <PhoneForm button="شروع رایگان" />
        </div>
      </div>
    </section>
  )
}
