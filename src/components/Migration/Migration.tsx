import './Migration.css'
import { useEffect, useRef, useState, type DragEvent } from 'react'
import { fa } from '../../landing/format'
import { MIGRATE_EVENT } from '../../landing/migrate'
import { isReduced } from '../../landing/reduced'

type RunMigration = (name?: string | null) => void

const steps = [
  'خواندن فایل',
  'شناسایی ۱,۲۴۰ کالا و تنوع',
  'انتقال ۳۸۰ مشتری',
  'تبدیل ۵,۶۰۰ سند حسابداری',
  'همگام‌سازی موجودی با کانال‌ها',
] as const

type StepState = '' | 'act' | 'ok'

const sleep = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms))

function savings(tools: number, cost: number, hours: number, rate: number) {
  const month = Math.max(0, tools * cost - 590 + hours * 26 * rate * 0.8)
  const label = (value: number) => `${fa(Number((value / 1000).toFixed(1)))} میلیون ت`
  return {
    month: label(month),
    year: label(month * 12),
    hours: `${fa(Math.round(hours * 26 * 0.8))} ساعت`,
  }
}

export function Migration() {
  const reduced = isReduced()
  const runningRef = useRef(false)
  const runRef = useRef<RunMigration>(() => {})
  const [fileName, setFileName] = useState('پشتیبان_حسابداری.xlsx')
  const [fileHidden, setFileHidden] = useState(false)
  const [stepState, setStepState] = useState<StepState[]>(() => steps.map(() => ''))
  const [progress, setProgress] = useState(0)
  const [title, setTitle] = useState('فایل پشتیبان یا اکسل رو اینجا بنداز')
  const [subtitle, setSubtitle] = useState('یا فایل نمونه رو بکش و رها کن')
  const [over, setOver] = useState(false)
  const [running, setRunning] = useState(false)
  const [tools, setTools] = useState(5)
  const [cost, setCost] = useState(400)
  const [hours, setHours] = useState(3)
  const [rate, setRate] = useState(200)
  const result = savings(tools, cost, hours, rate)

  useEffect(() => {
    let cancelled = false
    let resetTimer = 0

    async function run(name?: string | null) {
      if (runningRef.current || cancelled) return
      runningRef.current = true
      setRunning(true)
      if (name) setFileName(name)
      setFileHidden(true)
      for (let index = 0; index < steps.length; index += 1) {
        if (cancelled) return
        setStepState((current) => current.map((state, stepIndex) => (stepIndex === index ? 'act' : state)))
        setProgress(((index + 0.5) / steps.length) * 100)
        await sleep(reduced ? 0 : 750)
        if (cancelled) return
        setStepState((current) => current.map((state, stepIndex) => (stepIndex === index ? 'ok' : state)))
      }
      setProgress(100)
      setTitle('✓ مهاجرت کامل شد')
      setSubtitle('دستیار: «همه‌چیز منتقل شد؛ از فردا فقط با من حرف بزن!»')
      if (!reduced) {
        resetTimer = window.setTimeout(() => {
          if (cancelled) return
          runningRef.current = false
          setRunning(false)
          setStepState(steps.map(() => ''))
          setProgress(0)
          setFileHidden(false)
          setTitle('فایل پشتیبان یا اکسل رو اینجا بنداز')
          setSubtitle('یا فایل نمونه رو بکش و رها کن')
        }, 6000)
      }
    }

    runRef.current = (name) => {
      void run(name)
    }
    const onRequest = () => runRef.current(null)
    window.addEventListener(MIGRATE_EVENT, onRequest)
    if (reduced) runRef.current(null)
    return () => {
      cancelled = true
      runRef.current = () => {}
      window.clearTimeout(resetTimer)
      window.removeEventListener(MIGRATE_EVENT, onRequest)
    }
  }, [reduced])

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault()
    setOver(false)
    const file = event.dataTransfer.files?.[0]
    runRef.current(file ? file.name : null)
  }

  return (
    <section className="sec u-mig" id="u-mig">
      <div className="wrap">
        <span className="tag c">مهاجرت بی‌دردسر</span>
        <h2 className="ttl">از حسابداری فعلیت بیا؛ <span className="grad">دستیار منتقلش می‌کنه</span></h2>
        <div className="u-cmpt">
          <table className="u-tbl">
            <thead>
              <tr><th>قابلیت</th><th>حسابداری فعلیت</th><th className="u-me">جوروب</th></tr>
            </thead>
            <tbody>
              <tr><td>اتصال به فروشگاه آنلاین</td><td><i className="u-n">✕</i> جدا / افزونه</td><td><i className="u-y">✓</i> داخلی</td></tr>
              <tr><td>انبار همگام با همهٔ کانال‌ها</td><td><i className="u-n">✕</i> ورود دستی</td><td><i className="u-y">✓</i> لحظه‌ای</td></tr>
              <tr><td>دیجی‌کالا، ترب، باسلام</td><td><i className="u-n">✕</i></td><td><i className="u-y">✓</i> یکپارچه</td></tr>
              <tr><td>اینستاگرام، تلگرام، بله</td><td><i className="u-n">✕</i></td><td><i className="u-y">✓</i> یکپارچه</td></tr>
              <tr><td>دستیار صوتی و چتی</td><td><i className="u-n">✕</i></td><td><i className="u-y">✓</i> روی کل پنل</td></tr>
              <tr><td>اسناد خودکار از فروش</td><td><i className="u-p">~</i> نیمه‌خودکار</td><td><i className="u-y">✓</i> خودکار</td></tr>
              <tr><td>هزینه</td><td>چند اشتراک جدا</td><td><b>یک اشتراک</b></td></tr>
            </tbody>
          </table>
        </div>
        <div className="u-mgrid">
          <div className={running ? 'u-drop run' : 'u-drop'} id="udrop">
            <div
              className="u-file"
              id="ufile"
              draggable
              onDragStart={(event) => event.dataTransfer.setData('text/plain', 'sample')}
              onClick={() => runRef.current(null)}
              style={fileHidden ? { transform: 'translateY(70px) scale(.6)', opacity: 0 } : undefined}
            >
              <span>📄</span>
              <div><b>{fileName}</b><small>۴.۸ مگابایت · نمونه</small></div>
            </div>
            <div
              className={over ? 'u-zone over' : 'u-zone'}
              id="uzone"
              onClick={() => runRef.current(null)}
              onDragEnter={(event) => { event.preventDefault(); setOver(true) }}
              onDragOver={(event) => { event.preventDefault(); setOver(true) }}
              onDragLeave={() => setOver(false)}
              onDrop={onDrop}
            >
              <span>⬇</span>
              <b>{title}</b>
              <small>{subtitle}</small>
            </div>
            <ol className="u-steps" id="usteps">
              {steps.map((step, index) => <li key={step} className={stepState[index] || undefined}>{step}</li>)}
            </ol>
            <div className="u-prog"><i id="uprog" style={{ width: `${progress}%` }} /></div>
            <small className="x-sample">شبیه‌سازی؛ فایلی آپلود نمی‌شه. اعداد نمونه‌اند.</small>
          </div>
          <div className="u-calc" id="ucalc">
            <h3>چقدر صرفه‌جویی می‌کنی؟ <small>(تخمینی)</small></h3>
            <label>تعداد نرم‌افزارها و پنل‌های فعلی <output id="o1">{fa(tools)}</output>
              <input type="range" id="c1" min={1} max={12} value={tools} onChange={(event) => setTools(Number(event.target.value))} />
            </label>
            <label>میانگین هزینهٔ ماهانهٔ هرکدوم (هزار تومان) <output id="o2">{fa(cost)}</output>
              <input type="range" id="c2" min={50} max={2000} step={50} value={cost} onChange={(event) => setCost(Number(event.target.value))} />
            </label>
            <label>ساعت کار دستی روزانه <output id="o3">{fa(hours)}</output>
              <input type="range" id="c3" min={0} max={10} step={0.5} value={hours} onChange={(event) => setHours(Number(event.target.value))} />
            </label>
            <label>ارزش هر ساعت کار (هزار تومان) <output id="o4">{fa(rate)}</output>
              <input type="range" id="c4" min={50} max={1000} step={50} value={rate} onChange={(event) => setRate(Number(event.target.value))} />
            </label>
            <div className="u-res">
              <div><small>صرفه‌جویی ماهانه</small><b id="rm">{result.month}</b></div>
              <div><small>صرفه‌جویی سالانه</small><b id="ry">{result.year}</b></div>
              <div><small>زمان آزادشده در ماه</small><b id="rh">{result.hours}</b></div>
            </div>
            <small className="x-sample">* تخمین بر اساس پلن حرفه‌ای (۵۹۰ هزار تومان) و ۸۰٪ کاهش کار دستی.</small>
          </div>
        </div>
      </div>
    </section>
  )
}
