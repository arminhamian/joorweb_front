import './Flow.css'
import { flowSteps } from '../../landing/data'

export function Flow() {
  return (
    <section className="j5-flow" id="j5-flow">
      <div className="j5-fpin">
        <div className="wrap j5-fgrid">
          <div className="j5-ftxt">
            <span className="tag">ستون فقرات جوروب</span>
            <h2 className="ttl l">یه بار تعریف کن؛ <span className="grad">بقیه‌ش خودکاره</span></h2>
            <ol className="j5-steps" id="j5steps">
              {flowSteps.map((step, index) => (
                <li key={step} className={index === 0 ? 'on' : undefined}>{step}</li>
              ))}
            </ol>
            <div className="j5-fbar"><i id="j5fbar" /></div>
          </div>
          <div className="j5-fstage" id="j5fstage">
            <div className="j5-fs on">
              <small>۱ · منبع</small>
              <h3>یه پست اینستاگرام گذاشتی</h3>
              <div className="j5-ig">
                <div className="j5-igimg">👟</div>
                <div>
                  <b>@khane.kafsh</b>
                  <p>کفش چرم مشکی دست‌دوز 🖤 سایز ۳۹ تا ۴۴ · ۲,۴۵۰,۰۰۰ ت</p>
                </div>
              </div>
              <div className="x-bub me">🎙 «این پست رو به محصولات اضافه کن، ۳۰ تا موجودی داریم»</div>
            </div>
            <div className="j5-fs">
              <small>۲ · سیستم و انبار</small>
              <h3>کالا خودکار ساخته شد</h3>
              <div className="j5-card">
                <div className="j5-row"><span>نام</span><b>کفش چرم مشکی دست‌دوز</b></div>
                <div className="j5-row"><span>تنوع</span><b>۶ سایز</b></div>
                <div className="j5-row"><span>قیمت</span><b>۲,۴۵۰,۰۰۰ ت</b></div>
                <div className="j5-row"><span>انبار تهران</span><b className="j5-up">+۳۰</b></div>
                <div className="j5-row"><span>روش ارزیابی</span><b>میانگین موزون</b></div>
              </div>
            </div>
            <div className="j5-fs">
              <small>۳ · انتشار</small>
              <h3>همه‌جا، با توضیح مخصوص همون‌جا</h3>
              <div className="j5-pubs">
                <div><b>دیجی‌کالا</b><p>عنوان سئوشده + مشخصات فنی کامل</p></div>
                <div><b>ترب</b><p>قیمت و موجودی برای مقایسه</p></div>
                <div><b>باسلام</b><p>روایت دست‌ساز بودن محصول</p></div>
                <div><b>تلگرام و بله</b><p>پست کوتاه با لینک خرید</p></div>
                <div><b>سایت</b><p>صفحهٔ محصول کامل</p></div>
              </div>
            </div>
            <div className="j5-fs">
              <small>۴ · فروش</small>
              <h3>یه فروش؛ موجودی همه‌جا به‌روز</h3>
              <div className="j5-sale">
                <div className="j5-ev">🛒 فروش از باسلام · سایز ۴۲ × ۱</div>
                <div className="j5-chips">
                  <span>سایت ۲۹</span>
                  <span>دیجی‌کالا ۲۹</span>
                  <span>ترب ۲۹</span>
                  <span>باسلام ۲۹</span>
                  <span>انبار ۲۹</span>
                </div>
              </div>
            </div>
            <div className="j5-fs">
              <small>۵ · حسابداری</small>
              <h3>سند استاندارد، بدون دخالت تو</h3>
              <table className="j5-doc">
                <thead>
                  <tr><th>شرح</th><th>بدهکار</th><th>بستانکار</th></tr>
                </thead>
                <tbody>
                  <tr><td>حساب‌های دریافتنی</td><td>۲,۴۵۰,۰۰۰</td><td /></tr>
                  <tr><td>درآمد فروش</td><td /><td>۲,۴۵۰,۰۰۰</td></tr>
                  <tr><td>بهای تمام‌شدهٔ کالا</td><td>۱,۳۲۰,۰۰۰</td><td /></tr>
                  <tr><td>موجودی کالا</td><td /><td>۱,۳۲۰,۰۰۰</td></tr>
                </tbody>
              </table>
              <small className="x-sample">سند نمونه · مطابق IFRS</small>
            </div>
            <div className="j5-fs">
              <small>۶ · سفارش</small>
              <h3>پیگیری خودکار تا در خونهٔ مشتری</h3>
              <div className="j5-track">
                <i className="ok">ثبت</i>
                <i className="ok">بسته‌بندی</i>
                <i className="ok">تحویل به پست</i>
                <i className="cur">در مسیر</i>
                <i>تحویل</i>
              </div>
              <div className="x-bub ai">پیامک کد رهگیری برای مشتری فرستاده شد ✉️</div>
            </div>
            <div className="j5-fs">
              <small>۷ · گزارش</small>
              <h3>سود و زیان، همون لحظه</h3>
              <div className="x-pl">
                <div><small>فروش</small><b>۲.۴۵م</b></div>
                <div><small>بهای کالا</small><b>۱.۳۲م</b></div>
                <div><small>هزینه ارسال</small><b>۰.۱۸م</b></div>
                <div className="g"><small>سود این سفارش</small><b>۰.۹۵م</b></div>
              </div>
              <small className="x-sample">اعداد نمونه هستند.</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
