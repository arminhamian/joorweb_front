const KEY = 'joorweb-panel-auth'

export type PanelSession = {
  token: string
  tokenType: string
  label: string
}

export function readPanelSession(): PanelSession | null {
  try {
    const raw = sessionStorage.getItem(KEY)
    if (!raw) return null
    const data = JSON.parse(raw) as Partial<PanelSession>
    if (!data.token) return null
    return {
      token: data.token,
      tokenType: data.tokenType || 'Bearer',
      label: data.label || '',
    }
  } catch {
    return null
  }
}

export function writePanelSession(session: PanelSession): void {
  sessionStorage.setItem(KEY, JSON.stringify(session))
}
