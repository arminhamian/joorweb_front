import './Header.css'
import { useEffect, useState, type MouseEvent } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { navLinks } from '../../landing/data'

type HeaderProps = {
  onLogin: () => void
}

export function Header({ onLogin }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [light, setLight] = useState(() => document.documentElement.dataset.theme === 'light')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('jw-theme', next)
    } catch {
      /* keep the toggle working when storage is blocked */
    }
    setLight(next === 'light')
    window.setTimeout(() => ScrollTrigger.refresh(), 50)
  }

  return (
    <header id="hdr" className={scrolled ? 'sc' : undefined}>
      <div className="wrap hrow">
        <a className="logo" href="#">
          <span className="lm">ج</span>جوروب
        </a>
        <nav id="nav" className={open ? 'open' : undefined}>
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="hact">
          <a className="btn glass" href="/login" onClick={(event: MouseEvent<HTMLAnchorElement>) => {
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
            event.preventDefault()
            onLogin()
          }}>ورود</a>
          <a className="btn neon" href="#cta">شروع رایگان</a>
          <button className="j5-theme" id="j5theme" type="button" aria-label="تغییر تم" title="تم روشن/تیره" onClick={toggleTheme}>
            {light ? '🌙' : '☀️'}
          </button>
          <button id="mb" type="button" aria-label="منو" onClick={() => setOpen((value) => !value)}>☰</button>
        </div>
      </div>
    </header>
  )
}
