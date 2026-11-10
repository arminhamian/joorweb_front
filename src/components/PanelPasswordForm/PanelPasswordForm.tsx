import './PanelPasswordForm.css'
import { useState, type FormEvent } from 'react'
import { panelCopy } from '../../panel-login/copy'
import { submitPanelLogin } from '../../panel-login/login'

type PanelPasswordFormProps = {
  onSuccess: () => void
}

export function PanelPasswordForm({ onSuccess }: PanelPasswordFormProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    const result = await submitPanelLogin(username, password)
    setBusy(false)
    if (!result.ok) {
      setError(result.message)
      return
    }
    onSuccess()
  }

  return (
    <form className="panel-password" noValidate onSubmit={onSubmit}>
      <h2>{panelCopy.userTitle}</h2>
      <p className="panel-lead">{panelCopy.userLead}</p>
      <label htmlFor="panel-user">{panelCopy.userLabel}</label>
      <input
        id="panel-user"
        autoComplete="username"
        placeholder={panelCopy.userPlaceholder}
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="panel-pass">{panelCopy.passwordLabel}</label>
      <input
        id="panel-pass"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {error ? <span className="panel-error">{error}</span> : null}
      <button className="panel-submit" type="submit" disabled={busy}>{panelCopy.signIn}</button>
    </form>
  )
}
