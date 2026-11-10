import './OtpStep.css'
import { useEffect, useRef, useState, type ClipboardEvent, type FormEvent, type KeyboardEvent } from 'react'
import { loginCopy } from '../../login/copy'
import { formatMobile } from '../../login/phone'
import { formatCountdown, isCompleteOtp, isRejectedOtp, OTP_LENGTH, OTP_SECONDS, otpDigits } from '../../login/otp'

type OtpStepProps = {
  phone: string
  onEdit: () => void
  onSuccess: () => void
}

const emptyBoxes = () => Array.from({ length: OTP_LENGTH }, () => '')

export function OtpStep({ phone, onEdit, onSuccess }: OtpStepProps) {
  const [boxes, setBoxes] = useState(emptyBoxes)
  const [seconds, setSeconds] = useState(OTP_SECONDS)
  const [invalid, setInvalid] = useState(false)
  const [shake, setShake] = useState(false)
  const inputs = useRef<Array<HTMLInputElement | null>>([])
  const submitted = useRef('')

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((value) => (value > 0 ? value - 1 : 0))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    inputs.current[0]?.focus()
  }, [])

  function focusAt(index: number) {
    inputs.current[index]?.focus()
    inputs.current[index]?.select()
  }

  function reject() {
    setInvalid(true)
    setShake(false)
    window.requestAnimationFrame(() => setShake(true))
  }

  function commit(next: string[]) {
    setBoxes(next)
    const code = next.join('')
    if (!isCompleteOtp(code) || submitted.current === code) return
    if (isRejectedOtp(code)) {
      submitted.current = ''
      reject()
      return
    }
    submitted.current = code
    setInvalid(false)
    onSuccess()
  }

  function writeDigits(raw: string, start: number) {
    const digits = otpDigits(raw)
    if (!digits) return
    const next = boxes.slice()
    digits.split('').forEach((digit, offset) => {
      const index = start + offset
      if (index < OTP_LENGTH) next[index] = digit
    })
    const last = Math.min(OTP_LENGTH - 1, start + digits.length - 1)
    commit(next)
    if (next.join('').length < OTP_LENGTH) focusAt(Math.min(OTP_LENGTH - 1, last + 1))
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const code = boxes.join('')
    if (!isCompleteOtp(code) || isRejectedOtp(code)) {
      submitted.current = ''
      reject()
      return
    }
    if (submitted.current === code) return
    submitted.current = code
    onSuccess()
  }

  function onKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      if (index > 0) focusAt(index - 1)
      return
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      if (index < OTP_LENGTH - 1) focusAt(index + 1)
      return
    }
    if (event.key !== 'Backspace') return
    event.preventDefault()
    setInvalid(false)
    submitted.current = ''
    const next = boxes.slice()
    if (next[index]) {
      next[index] = ''
      setBoxes(next)
      return
    }
    if (index === 0) return
    next[index - 1] = ''
    setBoxes(next)
    focusAt(index - 1)
  }

  function onPaste(event: ClipboardEvent<HTMLInputElement>) {
    event.preventDefault()
    setInvalid(false)
    submitted.current = ''
    writeDigits(event.clipboardData.getData('text'), 0)
  }

  function resend() {
    submitted.current = ''
    setBoxes(emptyBoxes())
    setInvalid(false)
    setShake(false)
    setSeconds(OTP_SECONDS)
    focusAt(0)
  }

  const boxClass = `otp-boxes${invalid ? ' is-invalid' : ''}${shake ? ' animate-shake' : ''}`

  return (
    <form className="otp-step" onSubmit={onSubmit}>
      <h2>{loginCopy.otpTitle}</h2>
      <p className="step-lead">{loginCopy.otpLead}</p>
      <p className="otp-sent">
        <span>{loginCopy.sentTo}</span>
        <b className="tabular-nums" dir="ltr">{formatMobile(phone)}</b>
        <button className="otp-edit" type="button" onClick={onEdit}>{loginCopy.editPhone}</button>
      </p>
      <div className={boxClass} dir="ltr" onAnimationEnd={() => setShake(false)}>
        {boxes.map((digit, index) => (
          <input
            key={index}
            ref={(node) => { inputs.current[index] = node }}
            className="tabular-nums"
            dir="ltr"
            inputMode="numeric"
            autoComplete={index === 0 ? 'one-time-code' : 'off'}
            aria-label={`رقم ${index + 1}`}
            aria-invalid={invalid || undefined}
            value={digit}
            onChange={(event) => {
              setInvalid(false)
              submitted.current = ''
              const incoming = otpDigits(event.target.value)
              if (incoming.length > 1) {
                writeDigits(incoming, index)
                return
              }
              const next = boxes.slice()
              next[index] = incoming
              if (incoming && index < OTP_LENGTH - 1) focusAt(index + 1)
              commit(next)
            }}
            onKeyDown={(event) => onKeyDown(index, event)}
            onPaste={onPaste}
            onFocus={(event) => event.currentTarget.select()}
          />
        ))}
      </div>
      <span className="otp-error" role="alert">{invalid ? loginCopy.otpError : ''}</span>
      <div className="otp-timer">
        <span>
          {loginCopy.resendIn}{' '}
          <b className="tabular-nums" dir="ltr">{formatCountdown(seconds)}</b>
        </span>
        <button className="otp-resend" type="button" disabled={seconds > 0} onClick={resend}>
          {loginCopy.resend}
        </button>
      </div>
      <button className="auth-submit" type="submit">{loginCopy.confirm}</button>
    </form>
  )
}
