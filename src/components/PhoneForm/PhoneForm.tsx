import './PhoneForm.css'
import { useRef, useState, type FormEvent } from 'react'
import { toAsciiDigits } from '../../landing/format'

type PhoneFormProps = {
  button: string
  className?: string
}

export function PhoneForm({ button, className = 'phone' }: PhoneFormProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const digits = toAsciiDigits(value)
    if (!/^09\d{9}$/.test(digits)) {
      const input = inputRef.current
      if (!input) return
      input.classList.remove('err')
      void input.offsetWidth
      input.classList.add('err')
      return
    }
    setSent(true)
  }

  return (
    <form className={className} onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="tel"
        inputMode="numeric"
        placeholder="شماره موبایل"
        maxLength={11}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="btn neon">{sent ? 'کد ارسال شد ✓' : button}</button>
    </form>
  )
}
