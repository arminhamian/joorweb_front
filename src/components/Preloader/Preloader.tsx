import './Preloader.css'
import { useEffect, useRef, useState } from 'react'
import { fa } from '../../landing/format'
import { isReduced } from '../../landing/reduced'

type PreloaderProps = {
  onDone: () => void
}

export function Preloader({ onDone }: PreloaderProps) {
  const doneRef = useRef(onDone)
  doneRef.current = onDone
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const [gone, setGone] = useState(isReduced())

  useEffect(() => {
    if (isReduced()) return
    let value = 0
    let settled = false
    let finishTimer = 0
    let hideTimer = 0
    const timer = window.setInterval(() => {
      value = Math.min(100, value + Math.random() * 18 + 6)
      setProgress(value)
      if (value >= 100 && !settled) {
        settled = true
        window.clearInterval(timer)
        finishTimer = window.setTimeout(() => {
          document.body.classList.remove('loading')
          setDone(true)
          doneRef.current()
          hideTimer = window.setTimeout(() => setGone(true), 900)
        }, 250)
      }
    }, 90)
    return () => {
      window.clearInterval(timer)
      window.clearTimeout(finishTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  if (gone) return null

  return (
    <div id="pre" className={done ? 'done' : undefined}>
      <div className="pl">
        <span className="lm big">ج</span>
        <div className="pbar">
          <i id="pfill" style={{ width: `${Math.min(100, progress)}%` }} />
        </div>
        <b id="pct">{fa(Math.round(Math.min(100, progress)))}٪</b>
      </div>
    </div>
  )
}
