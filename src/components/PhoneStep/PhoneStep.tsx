import './PhoneStep.css'
import { useState, type FormEvent } from 'react'
import { loginCopy } from '../../login/copy'
import { formatMobile, isValidMobile, mobileDigits } from '../../login/phone'

type PhoneStepProps = {
  phone: string
  onPhone: (digits: string) => void
  onDone: () => void
}

export function PhoneStep({ phone, onPhone, onDone }: PhoneStepProps) {
  const [error, setError] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isValidMobile(phone)) {
      setError(true)
      return
    }
    setError(false)
    onDone()
  }

  return (
    <form className="phone-step" onSubmit={onSubmit} noValidate>
      <h2>{loginCopy.welcome} <span className="wave" aria-hidden="true">👋</span></h2>
      <p className="step-lead">{loginCopy.phoneLead}</p>
      <label htmlFor="login-mobile">{loginCopy.phoneLabel}</label>
      <div className={error ? 'phone-field bad' : 'phone-field'}>
        <span className="phone-mark" aria-hidden="true">☎</span>
        <input
          id="login-mobile"
          className="tabular-nums"
          dir="ltr"
          type="tel"
          inputMode="numeric"
          autoComplete="tel"
          placeholder={loginCopy.phonePlaceholder}
          value={formatMobile(phone)}
          aria-invalid={error || undefined}
          aria-describedby={error ? 'login-mobile-error' : undefined}
          onChange={(event) => {
            setError(false)
            onPhone(mobileDigits(event.target.value))
          }}
        />
      </div>
      {error ? (
        <span className="field-error" id="login-mobile-error">
          {loginCopy.phoneError}
        </span>
      ) : null}
      <button className="auth-submit" type="submit">
        <span>{loginCopy.sendCode}</span>
        <span aria-hidden="true">←</span>
      </button>
    </form>
  )
}
