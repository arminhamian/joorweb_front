import './Footer.css'
import { useState, type FormEvent } from 'react'

export function Footer() {
  const [joined, setJoined] = useState(false)

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setJoined(true)
  }

  return (
    <footer>
      <div className="wrap footg">
        <div>
          <a className="logo" href="#"><span className="lm">ج</span>جوروب</a>
          <p>سایت‌ساز فروشگاهی جوروب؛ ساده‌ترین راه برای فروش آنلاین در ایران.</p>
          <div className="soc"><a>📷</a><a>✈️</a><a>💼</a><a>▶️</a></div>
        </div>
        <div>
          <h5>محصول</h5>
          <a>امکانات</a><a>قالب‌ها</a><a>صفحه‌ساز</a><a>تعرفه‌ها</a>
        </div>
        <div>
          <h5>منابع</h5>
          <a>وبلاگ</a><a>آکادمی جوروب</a><a>مستندات API</a><a>وضعیت سرویس</a>
        </div>
        <div>
          <h5>تماس</h5>
          <a>۰۲۱-۰۰۰۰۰۰۰۰</a><a>info@joorweb.com</a><a>تهران، ایران</a>
        </div>
        <div className="news">
          <h5>خبرنامه</h5>
          <form className="phone sm" onSubmit={subscribe}>
            <input placeholder="ایمیل" />
            <button className="btn neon">{joined ? '✓' : 'عضویت'}</button>
          </form>
        </div>
      </div>
      <div className="wrap copy">© ۱۴۰۵ جوروب — تمامی حقوق محفوظ است.</div>
    </footer>
  )
}
