import { digitsOnly } from './numerals'

export const MOBILE_LENGTH = 11

export function mobileDigits(value: string): string {
  return digitsOnly(value).slice(0, MOBILE_LENGTH)
}

/** 09XX XXX XXXX — four, three, then four digits. */
export function formatMobile(digits: string): string {
  const value = mobileDigits(digits)
  const parts = [value.slice(0, 4), value.slice(4, 7), value.slice(7, 11)].filter(Boolean)
  return parts.join(' ')
}

export function isValidMobile(digits: string): boolean {
  return /^09\d{9}$/.test(mobileDigits(digits))
}
