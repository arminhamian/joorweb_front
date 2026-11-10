export type AppView = 'landing' | 'login'

export function readAppView(location: Location = window.location): AppView {
  const path = location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/login' || location.hash === '#login') return 'login'
  return 'landing'
}

export function goToLogin(): void {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/login' && window.location.hash === '') return
  window.history.pushState({ view: 'login' }, '', '/login')
}

export function goToLanding(): void {
  if (window.location.pathname === '/' && window.location.hash === '') return
  window.history.pushState({ view: 'landing' }, '', '/')
}
