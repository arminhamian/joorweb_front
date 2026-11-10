const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹'

export function fa(n: number): string {
  return n.toLocaleString('fa-IR')
}

export function toAsciiDigits(value: string): string {
  return value.replace(/[۰-۹]/g, (digit) => String(FA_DIGITS.indexOf(digit)))
}

export function moneyThousands(amount: number): string {
  return `${fa(amount)},۰۰۰`
}

export function cogsLabel(units: number): string {
  return `${fa(units * 1000)} ت`
}
