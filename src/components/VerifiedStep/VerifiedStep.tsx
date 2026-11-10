import './VerifiedStep.css'
import { useState } from 'react'
import { loginCopy } from '../../login/copy'

type VerifiedStepProps = {
  onBack: () => void
}

export function VerifiedStep({ onBack }: VerifiedStepProps) {
  const [entered, setEntered] = useState(false)

  return (
    <div className="verified-step">
      <div className="verified-mark" aria-hidden="true">✓</div>
      <h2>{loginCopy.verifiedTitle}</h2>
      <p className="step-lead">{loginCopy.verifiedLead}</p>
      <p className="verified-note">{entered ? loginCopy.entered : loginCopy.verifiedTitle}</p>
      <div className="verified-actions">
        <button className="auth-submit" type="button" onClick={() => setEntered(true)}>
          {loginCopy.enterDashboard}
        </button>
        <button className="verified-back" type="button" onClick={onBack}>
          {loginCopy.back}
        </button>
      </div>
    </div>
  )
}
