import './Faq.css'
import { useRef, useState } from 'react'
import { faqs } from '../../landing/data'

function Question({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const answerRef = useRef<HTMLDivElement>(null)

  function toggle() {
    const next = !open
    const panel = answerRef.current
    if (panel) panel.style.maxHeight = next ? `${panel.scrollHeight}px` : '0'
    setOpen(next)
  }

  return (
    <div className={open ? 'qa rv open' : 'qa rv'}>
      <button type="button" onClick={toggle}>{question}<i>+</i></button>
      <div className="ans" ref={answerRef}><p>{answer}</p></div>
    </div>
  )
}

export function Faq() {
  return (
    <section className="sec" id="faq">
      <div className="wrap narrow">
        <h2 className="ttl rv">سؤالات متداول</h2>
        <div id="faql">
          {faqs.map(([question, answer]) => <Question key={question} question={question} answer={answer} />)}
        </div>
      </div>
    </section>
  )
}
