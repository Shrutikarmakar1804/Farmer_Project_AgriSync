import Card from './_Card'

export default function MandiMonitoring({ mandis }) {
  return (
    <>
      <div className="page-heading"><div><small>REAL-TIME MANDI MONITORING</small><h1>Mandi Monitoring</h1><p>Compare waiting time, utilization and operational status.</p></div></div>
      <div className="msp-grid">{mandis.map(m => <Card key={m[0]}><span className="crop-emoji">⌖</span><h3>{m[0]}</h3><small>{m[1]}</small><strong className="msp-price">{m[3]}</strong><small>Average waiting time</small><span className={`pill ${m[4] === 'Attention' ? 'checking' : 'success'}`}>{m[4]}</span></Card>)}</div>
    </>
  )
}
