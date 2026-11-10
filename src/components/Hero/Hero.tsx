import './Hero.css'
import { useEffect, useRef, useState } from 'react'
import { heroScenes } from '../../landing/data'
import { isReduced } from '../../landing/reduced'
import { PhoneForm } from '../PhoneForm/PhoneForm'

type ChatMessage = {
  id: number
  kind: 'me' | 'ai'
  text: string
  voice: boolean
  pending: boolean
}

type ResultCard = {
  id: number
  icon: string
  title: string
  detail: string
  delay: number
  leaving: boolean
}

const sleep = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms))

export function Hero({ active }: { active: boolean }) {
  const voiceRef = useRef(false)
  const speakingRef = useRef(false)
  const waveRef = useRef<HTMLDivElement>(null)
  const [voice, setVoice] = useState(false)
  const [status, setStatus] = useState('آنلاین · آماده')
  const [typed, setTyped] = useState('بنویس یا بگو…')
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [cards, setCards] = useState<ResultCard[]>([])

  useEffect(() => {
    if (isReduced()) return
    const bars = waveRef.current?.querySelectorAll('i')
    if (!bars) return
    let timer = 0
    const tick = () => {
      bars.forEach((bar, index) => {
        const amp = speakingRef.current ? (voiceRef.current ? 26 : 16) : 3
        const height = 4 + Math.abs(Math.sin(Date.now() / 180 + index * 0.7)) * amp * Math.random()
        bar.style.height = `${height}px`
      })
      timer = window.setTimeout(tick, 110)
    }
    tick()
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!active) return
    let cancelled = false
    let messageId = 0
    let cardId = 0

    const pushMessage = (message: ChatMessage) => {
      setMessages((current) => [...current, message].slice(-4))
    }

    async function run() {
      if (isReduced()) {
        const scene = heroScenes[0]
        setMessages([
          { id: 1, kind: 'me', text: scene.q, voice: false, pending: false },
          { id: 2, kind: 'ai', text: scene.a, voice: false, pending: false },
        ])
        setCards(scene.acts.map((act, index) => ({
          id: index + 1,
          icon: act[0],
          title: act[1],
          detail: act[2],
          delay: 0,
          leaving: false,
        })))
        return
      }

      await sleep(1300)
      let cursor = 0
      while (!cancelled) {
        const scene = heroScenes[cursor % heroScenes.length]
        cursor += 1
        if (!scene) return
        setCards((current) => current.map((card) => ({ ...card, leaving: true })))
        await sleep(400)
        if (cancelled) return
        setCards([])
        for (let index = 1; index <= scene.q.length; index += 1) {
          if (cancelled) return
          setTyped(scene.q.slice(0, index))
          setTyping(true)
          await sleep(voiceRef.current ? 22 : 38)
        }
        await sleep(350)
        if (cancelled) return
        const heard = voiceRef.current
        setTyping(false)
        setTyped(heard ? 'در حال شنیدن…' : 'بنویس یا بگو…')
        pushMessage({ id: ++messageId, kind: 'me', text: scene.q, voice: heard, pending: false })
        const replyId = ++messageId
        pushMessage({ id: replyId, kind: 'ai', text: '', voice: false, pending: true })
        speakingRef.current = true
        setStatus('در حال انجام…')
        await sleep(1300)
        if (cancelled) return
        setMessages((current) => current.map((message) => (
          message.id === replyId ? { ...message, pending: false, text: scene.a } : message
        )))
        setCards(scene.acts.map((act, index) => ({
          id: ++cardId,
          icon: act[0],
          title: act[1],
          detail: act[2],
          delay: index * 380,
          leaving: false,
        })))
        await sleep(1200 + scene.acts.length * 380)
        if (cancelled) return
        speakingRef.current = false
        setStatus(voiceRef.current ? 'در حال شنیدن…' : 'آنلاین · آماده')
        await sleep(3200)
      }
    }

    void run()
    return () => {
      cancelled = true
      speakingRef.current = false
    }
  }, [active])

  function toggleVoice() {
    const next = !voiceRef.current
    voiceRef.current = next
    setVoice(next)
    setStatus(next ? 'در حال شنیدن…' : 'آنلاین · آماده')
  }

  return (
    <section className="x-hero j5-hero" id="j5-hero">
      <div className="x-aurora"><i /><i /><i /></div>
      <div className="x-noise" />
      <div className="wrap x-hgrid">
        <div className="x-htxt">
          <span className="pill hr">✦ سیستم یکپارچهٔ مدیریت کسب‌وکار · با دستیار هوشمند</span>
          <h1 className="hr">
            <span className="ln">کل کسب‌وکارت روی یه سیستم.</span>
            <span className="ln grad">فقط بگو چی می‌خوای.</span>
          </h1>
          <p className="lead hr">حسابداری، انبار، فروش، بازاریابی و سفارش‌ها روی یک دادهٔ مشترک؛ و یه دستیار که با صدا یا چت همه‌ش رو برات انجام می‌ده.</p>
          <PhoneForm button="شروع رایگان" className="phone hr" />
          <small className="muted hr">۱۴ روز رایگان · مهاجرت رایگان · بدون کارت بانکی</small>
        </div>
        <div className="x-demo u-demo hr">
          <div className={voice ? 'x-console voice' : 'x-console'} id="xc">
            <div className="x-chead">
              <span className="x-ava"><i /></span>
              <div>
                <b>دستیار جوروب</b>
                <small id="xstat">{status}</small>
              </div>
              <div className="x-wave" id="xwave" ref={waveRef}>
                {Array.from({ length: 22 }, (_, index) => <i key={index} />)}
              </div>
            </div>
            <div className="x-msgs" id="xmsgs">
              {messages.map((message) => (
                <div className={`x-m ${message.kind}`} key={message.id}>
                  {message.voice ? <span className="v">🎙 پیام صوتی</span> : null}
                  {message.pending ? <span className="x-dots"><i /><i /><i /></span> : message.text}
                </div>
              ))}
            </div>
            <div className="x-input">
              <span id="xtyping" style={typing ? { color: '#fff' } : undefined}>{typed}</span>
              <button className="x-mic" id="xmic" type="button" aria-label="حالت صوتی" onClick={toggleVoice}>🎙</button>
            </div>
          </div>
          <div className="x-acts" id="xacts">
            {cards.map((card) => (
              <div className={card.leaving ? 'x-act out' : 'x-act'} key={card.id} style={{ animationDelay: `${card.delay}ms` }}>
                <b>{card.icon} {card.title}<span className="ok">✓</span></b>
                <small>{card.detail}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
