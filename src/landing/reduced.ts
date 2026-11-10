export function isReduced(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.location.search.includes('static')
}

export function isTouch(): boolean {
  return window.matchMedia('(hover: none)').matches
}
