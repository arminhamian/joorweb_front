import './Glow.css'
import { useEffect } from 'react'
import { isTouch } from '../../landing/reduced'

export function Glow() {
  useEffect(() => {
    if (isTouch()) return
    const glow = document.getElementById('glow')
    if (!glow) return
    const onMove = (event: MouseEvent) => {
      glow.style.transform = `translate(${event.clientX - 300}px, ${event.clientY - 300}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return <div id="glow" />
}
