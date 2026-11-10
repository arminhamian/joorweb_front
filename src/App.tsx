import { useEffect, useState } from 'react'
import { Preloader } from './components/Preloader/Preloader'
import { Glow } from './components/Glow/Glow'
import { Header } from './components/Header/Header'
import { Thread } from './components/Thread/Thread'
import { Hero } from './components/Hero/Hero'
import { Reveal } from './components/Reveal/Reveal'
import { Flow } from './components/Flow/Flow'
import { Arms } from './components/Arms/Arms'
import { Standards } from './components/Standards/Standards'
import { Grow } from './components/Grow/Grow'
import { Migration } from './components/Migration/Migration'
import { WhiteLabel } from './components/WhiteLabel/WhiteLabel'
import { Pricing } from './components/Pricing/Pricing'
import { Faq } from './components/Faq/Faq'
import { Cta } from './components/Cta/Cta'
import { Footer } from './components/Footer/Footer'
import { PanelLogin } from './components/PanelLogin/PanelLogin'
import { startMotion } from './landing/motion'
import { isReduced } from './landing/reduced'
import { goToLanding, goToLogin, readAppView } from './login/route'

export default function App() {
  const [view, setView] = useState(readAppView)
  const [ready, setReady] = useState(() => isReduced() || readAppView() === 'login')

  useEffect(() => {
    const sync = () => setView(readAppView())
    window.addEventListener('popstate', sync)
    window.addEventListener('hashchange', sync)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener('hashchange', sync)
    }
  }, [])

  useEffect(() => {
    if (!ready || view !== 'landing') return
    return startMotion()
  }, [ready, view])

  function openLogin() {
    goToLogin()
    setView('login')
  }

  function openLanding() {
    goToLanding()
    setView('landing')
  }

  if (view === 'login') {
    return <PanelLogin onEnter={openLanding} />
  }

  return (
    <>
      {ready ? null : <Preloader onDone={() => setReady(true)} />}
      <Glow />
      <Header onLogin={openLogin} />
      <Thread />
      <Hero active={ready} />
      <Reveal />
      <Flow />
      <Arms />
      <Standards />
      <Grow />
      <Migration />
      <WhiteLabel />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </>
  )
}
