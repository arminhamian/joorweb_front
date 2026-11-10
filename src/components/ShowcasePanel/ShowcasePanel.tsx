import './ShowcasePanel.css'
import { fa } from '../../landing/format'
import { loginCopy } from '../../login/copy'
import { deskInvoices, deskSales } from '../../login/telemetry'

export function ShowcasePanel() {
  return (
    <aside className="showcase arch-grid" aria-label={loginCopy.deskTitle}>
      <div className="showcase-copy">
        <p className="showcase-pill">{loginCopy.showcasePill}</p>
        <h2>{loginCopy.showcaseTitle}</h2>
        <p className="showcase-lead">{loginCopy.showcaseLead}</p>
        <div className="telemetry">
          <div className="telemetry-head">
            <span className="bolt" aria-hidden="true">⚡</span>
            <div className="telemetry-name">
              <strong>{loginCopy.deskTitle}</strong>
              <small>{loginCopy.deskBranch}</small>
            </div>
            <span className="online">{loginCopy.online}</span>
          </div>
          <div className="telemetry-figs">
            <div>
              <span>{loginCopy.salesLabel}</span>
              <b className="tabular-nums">{fa(deskSales)} {loginCopy.toman}</b>
            </div>
            <div>
              <span>{loginCopy.invoiceLabel}</span>
              <b className="tabular-nums">{fa(deskInvoices)} {loginCopy.count}</b>
            </div>
          </div>
        </div>
      </div>
      <div className="showcase-foot">
        <span>{loginCopy.copyRight}</span>
        <span>{loginCopy.privacy}</span>
      </div>
    </aside>
  )
}
