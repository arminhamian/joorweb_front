import '../../styles/tokens.css'
import './LoginPage.css'
import { useEffect } from 'react'
import { AuthCard } from '../AuthCard/AuthCard'
import { ShowcasePanel } from '../ShowcasePanel/ShowcasePanel'

type LoginPageProps = {
  onBack: () => void
}

export function LoginPage({ onBack }: LoginPageProps) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'ورود | جوروب'
    document.body.classList.add('auth-view')
    document.body.classList.remove('loading')
    window.scrollTo(0, 0)
    return () => {
      document.title = previousTitle
      document.body.classList.remove('auth-view')
    }
  }, [])

  return (
    <main className="login-page" id="login">
      <div className="login-shell">
        <div className="login-auth">
          <AuthCard onBack={onBack} />
        </div>
        <div className="login-show">
          <ShowcasePanel />
        </div>
      </div>
    </main>
  )
}
