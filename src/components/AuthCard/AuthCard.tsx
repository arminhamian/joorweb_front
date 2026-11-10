import './AuthCard.css'
import { useState } from 'react'
import { loginCopy } from '../../login/copy'
import { AuthProgress } from '../AuthProgress/AuthProgress'
import { OtpStep } from '../OtpStep/OtpStep'
import { PhoneStep } from '../PhoneStep/PhoneStep'
import { VerifiedStep } from '../VerifiedStep/VerifiedStep'

type AuthCardProps = {
  onBack: () => void
}

export function AuthCard({ onBack }: AuthCardProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [phone, setPhone] = useState('')

  return (
    <section className="auth-card" aria-labelledby="auth-title">
      <div className="auth-brand">
        <button className="brand-lockup" type="button" onClick={onBack} aria-label={loginCopy.back}>
          <span className="brand-mark" aria-hidden="true">{loginCopy.mark}</span>
          <span className="brand-text">
            <strong id="auth-title">{loginCopy.brand}</strong>
            <small>{loginCopy.brandLead}</small>
          </span>
        </button>
        <span className="date-pill">{loginCopy.date}</span>
      </div>
      <AuthProgress
        step={step}
        onStep={(next) => {
          if (next < step) setStep(next)
        }}
      />
      <div className="auth-body">
        {step === 1 ? (
          <PhoneStep phone={phone} onPhone={setPhone} onDone={() => setStep(2)} />
        ) : null}
        {step === 2 ? (
          <OtpStep phone={phone} onEdit={() => setStep(1)} onSuccess={() => setStep(3)} />
        ) : null}
        {step === 3 ? <VerifiedStep onBack={onBack} /> : null}
      </div>
      <div className="auth-foot">
        <span>
          {loginCopy.support}{' '}
          <b className="tabular-nums" dir="ltr">{loginCopy.supportPhone}</b>
        </span>
        <span>{loginCopy.security}</span>
      </div>
    </section>
  )
}
