import { isReduced, isTouch } from './reduced'

const bound = new WeakSet<HTMLElement>()

export function bindTilt(root: ParentNode = document): void {
  if (isTouch() || isReduced()) return
  root.querySelectorAll<HTMLElement>('.tilt').forEach((card) => {
    if (bound.has(card)) return
    bound.add(card)
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width
      const y = (event.clientY - rect.top) / rect.height
      card.style.setProperty('--mx', `${x * 100}%`)
      card.style.setProperty('--my', `${y * 100}%`)
      card.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 8}deg)`
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = ''
    })
  })
}
