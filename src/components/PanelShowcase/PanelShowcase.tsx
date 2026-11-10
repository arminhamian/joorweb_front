import './PanelShowcase.css'
import robotUrl from '../../assets/login/desk-robot.gif'
import { panelCopy } from '../../panel-login/copy'

export function PanelShowcase() {
  return (
    <aside className="panel-showcase" aria-label={panelCopy.showcaseTitle}>
      <div className="panel-showcase-copy">
        <p className="panel-pill">{panelCopy.showcasePill}</p>
        <h2>{panelCopy.showcaseTitle}</h2>
        <p className="panel-showcase-lead">{panelCopy.showcaseLead}</p>
        <p className="panel-note">{panelCopy.copyRight}</p>
      </div>
      <div className="panel-stage">
        <img
          className="panel-robot"
          src={robotUrl}
          alt={panelCopy.robotAlt}
          width={640}
          height={360}
        />
      </div>
    </aside>
  )
}
