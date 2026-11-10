import './PanelLogin.css'
import { useEffect } from 'react'
import { PanelAuthCard } from '../PanelAuthCard/PanelAuthCard'
import { PanelShowcase } from '../PanelShowcase/PanelShowcase'
import { readPanelSession } from '../../panel-login/session'

type PanelLoginProps = {
  onEnter: () => void
}

export function PanelLogin({ onEnter }: PanelLoginProps) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'ورود | فروشگاه نمونه'
    document.body.classList.remove('loading')
    window.scrollTo(0, 0)
    if (readPanelSession()?.token) onEnter()
    return () => {
      document.title = previousTitle
    }
  }, [onEnter])

  return (
    <main className="panel-login">
      <div className="panel-shell">
        <div className="panel-side">
          <PanelAuthCard onSuccess={onEnter} />
        </div>
        <div className="panel-show">
          <PanelShowcase />
        </div>
      </div>
    </main>
  )
}
