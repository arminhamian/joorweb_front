export function datePill(date = new Date()): string {
  const weekday = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { weekday: 'long' }).format(date)
  const year = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric' }).format(date)
  return `${weekday} ${year}`
}
