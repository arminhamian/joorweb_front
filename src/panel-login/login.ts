import { panelCopy } from './copy'
import { loginDomain, loginDomainMissing } from './loginDomain'
import { writePanelSession } from './session'

const loginUrl = 'https://apiv2.joorweb.com/api/v1/auth/login'

type LoginPayload = {
  token?: string
  token_type?: string
  message_fa?: string
}

export type LoginOutcome = { ok: true } | { ok: false; message: string }

export async function submitPanelLogin(username: string, password: string): Promise<LoginOutcome> {
  const name = username.trim()
  if (!name || !password) return { ok: false, message: panelCopy.passwordError }
  if (!loginDomain.trim()) return { ok: false, message: loginDomainMissing }
  try {
    const response = await fetch(loginUrl, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ domain: loginDomain, username: name, password }),
    })
    const data = (await response.json().catch(() => ({}))) as LoginPayload
    if (!response.ok || !data.token) {
      return { ok: false, message: data.message_fa || panelCopy.loginFailed }
    }
    writePanelSession({
      token: data.token,
      tokenType: data.token_type || 'Bearer',
      label: name,
    })
    return { ok: true }
  } catch {
    return { ok: false, message: panelCopy.networkError }
  }
}
