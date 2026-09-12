import Card from './_Card'

const reports = ['Daily procurement report','Mandi waiting-time report','MSP compliance report','Farmer transaction summary']

export default function Reports({ onGenerate }) {
  return (
    <>
      <div className="page-heading"><div><small>OFFICIAL REPORTS</small><h1>Reports & Downloads</h1><p>Generate operational and procurement reports for review.</p></div></div>
      <div className="support-grid">{reports.map(name => <Card key={name}><span className="support-icon">▤</span><h3>{name}</h3><p>PDF-ready summary for the selected reporting period.</p><button className="secondary small" onClick={() => onGenerate(name)}>Generate Report</button></Card>)}</div>
    </>
  )
}
