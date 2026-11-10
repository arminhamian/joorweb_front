import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { requestMigration } from './migrate'
import { isReduced } from './reduced'
import { bindTilt } from './tilt'

gsap.registerPlugin(ScrollTrigger)

function setFlow(progress: number): void {
  const index = Math.min(6, Math.floor(progress * 7))
  document.querySelectorAll('.j5-fs').forEach((scene, sceneIndex) => {
    scene.classList.toggle('on', sceneIndex === index)
  })
  document.querySelectorAll('#j5steps li').forEach((step, stepIndex) => {
    step.classList.toggle('on', stepIndex === index)
    step.classList.toggle('done', stepIndex < index)
  })
  const bar = document.getElementById('j5fbar')
  if (bar) bar.style.width = `${progress * 100}%`
}

function revealTimeline(): gsap.core.Timeline {
  const timeline = gsap.timeline()
  timeline
    .to('.j5-strike', { '--sk': '100%', duration: 0.6 })
    .to('#j5store', { scale: 0.5, opacity: 0, filter: 'blur(8px)', duration: 0.6 }, '+=0.1')
    .to('#j5core', { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.6)' }, '-=0.3')
    .fromTo('#j5beams path', { opacity: 0 }, { opacity: 0.7, stagger: 0.06, duration: 0.4 })
    .fromTo(
      '.j5-armn',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'back.out(1.8)' },
      '<',
    )
    .to('#j5rcap', { opacity: 1, duration: 0.5 })
  return timeline
}

export function startMotion(): () => void {
  const reduced = isReduced()
  const thread = document.getElementById('u-thread') as SVGSVGElement | null
  const threadBase = document.getElementById('u-tbase')
  const threadLine = document.getElementById('u-tline') as SVGPathElement | null
  const threadDot = document.getElementById('u-tdot')
  let threadLength = 0

  const drawThread = () => {
    if (!threadLine || !threadDot || !threadLength) return
    if (reduced) {
      threadLine.style.strokeDashoffset = '0'
      threadDot.style.display = 'none'
      return
    }
    const targetY = window.scrollY + window.innerHeight * 0.62
    let low = 0
    let high = threadLength
    for (let step = 0; step < 22; step += 1) {
      const mid = (low + high) / 2
      if (threadLine.getPointAtLength(mid).y < targetY) low = mid
      else high = mid
    }
    threadLine.style.strokeDashoffset = String(threadLength - low)
    const point = threadLine.getPointAtLength(low)
    threadDot.setAttribute('cx', String(point.x))
    threadDot.setAttribute('cy', String(point.y))
    threadDot.style.opacity = low > 2 ? '1' : '0'
  }

  const buildThread = () => {
    if (!thread || !threadBase || !threadLine || !threadDot) return
    const sections = [...document.querySelectorAll('section')].filter(
      (section) => section.id !== 'j5-hero' && (section as HTMLElement).offsetHeight > 0,
    )
    const width = document.documentElement.clientWidth
    const height = document.documentElement.scrollHeight
    thread.setAttribute('width', String(width))
    thread.setAttribute('height', String(height))
    thread.style.height = `${height}px`
    const margin = window.innerWidth <= 1000 ? 10 : Math.max(24, (width - 1240) / 2 + 6)
    const hero = document.getElementById('j5-hero')
    const footer = document.querySelector('footer')
    if (!hero || !footer) return
    let y0 = hero.getBoundingClientRect().bottom + window.scrollY - 40
    let path = `M${width / 2} ${y0}`
    let previousX = width / 2
    let previousY = y0
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect()
      const y = rect.top + window.scrollY + rect.height / 2
      const x = index % 2 ? margin : width - margin
      path += ` C ${previousX} ${(previousY + y) / 2}, ${x} ${(previousY + y) / 2}, ${x} ${y}`
      previousX = x
      previousY = y
    })
    const footerY = footer.getBoundingClientRect().top + window.scrollY
    path += ` C ${previousX} ${(previousY + footerY) / 2}, ${width / 2} ${(previousY + footerY) / 2}, ${width / 2} ${footerY}`
    threadBase.setAttribute('d', path)
    threadLine.setAttribute('d', path)
    threadLength = threadLine.getTotalLength()
    threadLine.style.strokeDasharray = String(threadLength)
    drawThread()
  }

  setFlow(0)
  bindTilt()
  window.addEventListener('scroll', drawThread, { passive: true })
  window.addEventListener('resize', buildThread)

  if (reduced) {
    document.documentElement.classList.add('rm')
    document.querySelectorAll('.j5-fs').forEach((scene) => scene.classList.add('on'))
    document.querySelectorAll('.j5-g').forEach((panel) => panel.classList.add('on'))
    document.querySelectorAll<SVGPathElement>('#j5beams path').forEach((beam) => {
      beam.style.opacity = '0.7'
    })
    const timer = window.setTimeout(buildThread, 300)
    window.addEventListener('load', buildThread)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('load', buildThread)
      window.removeEventListener('scroll', drawThread)
      window.removeEventListener('resize', buildThread)
    }
  }

  const context = gsap.context(() => {
    const reveal = revealTimeline()
    reveal.pause(0)
    const media = gsap.matchMedia()
    media.add('(min-width: 1001px)', () => {
      ScrollTrigger.create({
        trigger: '#j5-reveal',
        start: 'top top',
        end: '+=1100',
        pin: '.j5-rpin',
        scrub: 1,
        animation: reveal,
      })
      ScrollTrigger.create({
        trigger: '#j5-flow',
        start: 'top top',
        end: '+=2600',
        pin: '.j5-fpin',
        scrub: true,
        onUpdate: (self) => setFlow(self.progress),
      })
    })
    media.add('(max-width: 1000px)', () => {
      ScrollTrigger.create({
        trigger: '#j5hub',
        start: 'top 70%',
        once: true,
        onEnter: () => reveal.play(),
      })
      document.querySelectorAll('.j5-fs').forEach((scene) => scene.classList.add('on'))
    })

    gsap.fromTo('#hdr', { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3, clearProps: 'transform,opacity' })
    gsap.fromTo(
      '.hr',
      { y: 50, opacity: 0, filter: 'blur(8px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', stagger: 0.1, duration: 1.1, ease: 'power4.out', delay: 0.15, clearProps: 'filter' },
    )
    gsap.to('.x-aurora', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: { trigger: '#j5-hero', start: 'top top', end: 'bottom top', scrub: true },
    })
    document.querySelectorAll('.rv').forEach((element) => {
      gsap.fromTo(
        element,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%' } },
      )
    })
    ScrollTrigger.create({
      trigger: '#udrop',
      start: 'top 65%',
      once: true,
      onEnter: () => window.setTimeout(() => requestMigration(), 900),
    })
    ;['.j5-arm', '.j5-badges span', '.j5-cogs', '.u-drop,.u-calc', '.u-wc'].forEach((selector) => {
      const trigger = document.querySelector(selector.split(',')[0] ?? selector)
      gsap.from(selector, {
        y: 50,
        opacity: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger, start: 'top 88%' },
      })
    })
    gsap.from('.u-wpanel', {
      rotateX: 18,
      y: 60,
      opacity: 0,
      transformPerspective: 1200,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.u-wpanel', start: 'top 85%' },
    })
  })

  const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
  const onLenisScroll = () => ScrollTrigger.update()
  lenis.on('scroll', onLenisScroll)
  const tick = (time: number) => {
    lenis.raf(time * 1000)
  }
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  const onAnchorClick = (event: MouseEvent) => {
    const anchor = (event.target as Element | null)?.closest('a[href^="#"]')
    if (!(anchor instanceof HTMLAnchorElement)) return
    const href = anchor.getAttribute('href')
    if (!href || href.length <= 1) return
    const target = document.querySelector(href)
    if (!(target instanceof HTMLElement)) return
    event.preventDefault()
    lenis.scrollTo(target, { offset: -70 })
  }
  document.addEventListener('click', onAnchorClick)

  const refreshThread = () => buildThread()
  ScrollTrigger.addEventListener('refresh', refreshThread)
  const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 200)
  const onLoad = () => ScrollTrigger.refresh()
  if (document.readyState === 'complete') onLoad()
  else window.addEventListener('load', onLoad)

  return () => {
    window.clearTimeout(refreshTimer)
    document.removeEventListener('click', onAnchorClick)
    window.removeEventListener('load', onLoad)
    window.removeEventListener('scroll', drawThread)
    window.removeEventListener('resize', buildThread)
    ScrollTrigger.removeEventListener('refresh', refreshThread)
    gsap.ticker.remove(tick)
    lenis.destroy()
    context.revert()
  }
}
