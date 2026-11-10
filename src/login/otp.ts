import { digitsOnly, toPersianDigits } from './numerals'

export const OTP_LENGTH = 6
export const OTP_SECONDS = 120

export function otpDigits(value: string): string {
  return digitsOnly(value).slice(0, OTP_LENGTH)
}

export function isCompleteOtp(code: string): boolean {
  return /^\d{6}$/.test(code)
}

export function isRejectedOtp(code: string): boolean {
  return code === '000000'
}

export function formatCountdown(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds)
  const minutes = Math.floor(safe / 60)
  const seconds = safe % 60
  const clock = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  return toPersianDigits(clock)
}
