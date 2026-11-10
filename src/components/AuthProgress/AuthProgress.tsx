import './AuthProgress.css'
import { loginCopy } from '../../login/copy'

type AuthProgressProps = {
  step: 1 | 2 | 3
  onStep: (step: 1 | 2 | 3) => void
}

export function AuthProgress({ step, onStep }: AuthProgressProps) {
  return (
    <ol className="auth-progress" aria-label="مراحل ورود">
      {loginCopy.steps.map((item) => {
        const state = item.id === step ? 'on' : item.id < step ? 'done' : ''
        const canReturn = item.id < step
        return (
          <li key={item.id} className={state}>
            <button
              type="button"
              className={canReturn ? 'can' : undefined}
              aria-current={item.id === step ? 'step' : undefined}
              disabled={!canReturn}
              onClick={() => {
                if (canReturn) onStep(item.id as 1 | 2 | 3)
              }}
            >
              <span className="auth-step-mark tabular-nums">{item.mark}</span>
              <span className="auth-step-label">{item.label}</span>
            </button>
          </li>
        )
      })}
    </ol>
  )
}
