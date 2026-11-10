import './PanelAuthCard.css'
import { panelCopy } from '../../panel-login/copy'
import { datePill } from '../../panel-login/datePill'
import { PanelPasswordForm } from '../PanelPasswordForm/PanelPasswordForm'

type PanelAuthCardProps = {
  onSuccess: () => void
}

export function PanelAuthCard({ onSuccess }: PanelAuthCardProps) {
  return (
    <section className="panel-auth" aria-labelledby="panel-auth-title">
      <div className="panel-brand">
        <div className="panel-lockup">
          <span className="panel-mark" aria-hidden="true">{panelCopy.mark}</span>
          <span className="panel-brand-text">
            <strong id="panel-auth-title">{panelCopy.brand}</strong>
            <small>{panelCopy.brandLead}</small>
          </span>
        </div>
        <span className="panel-date">{datePill()}</span>
      </div>
      <div className="panel-auth-body">
        <PanelPasswordForm onSuccess={onSuccess} />
      </div>
      <div className="panel-foot">
        <span>
          {panelCopy.supportLabel}{' '}
          <b className="tabular-nums" dir="ltr">{panelCopy.supportPhone}</b>
        </span>
      </div>
    </section>
  )
}
