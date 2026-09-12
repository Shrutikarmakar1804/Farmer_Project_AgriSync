import Card from './_Card'

export default function Government({ mandis, procurement, onNavigate, onRefresh }) {
  return (
    <>
      <div className="page-heading"><div><small>GOVERNMENT PROCUREMENT MONITORING</small><h1>State Dashboard</h1><p>Monitor mandi operations, procurement progress, MSP compliance and farmer waiting time.</p></div><button className="secondary" onClick={onRefresh}>↻ Refresh Data</button></div>
      <div className="government-stats"><div><b>4,030 q</b><span>Produce procured today</span><small>↑ 8.4%</small></div><div><b>₹118.16L</b><span>Procurement value</span><small>↑ 6.1%</small></div><div><b>19 min</b><span>Average farmer wait</span><small>↓ 12%</small></div><div><b>92%</b><span>MSP compliance</span><small>↑ 3.2%</small></div></div>
      <div className="two-col">
        <Card><div className="card-heading"><div><h3>Mandi performance</h3><p>Live operational status across monitored centers.</p></div><span className="pill success">Live</span></div>{mandis.map(m => <div className="mandi-row" key={m[0]}><div><b>{m[0]}</b><small>{m[1]}</small></div><div className="mini-progress"><span style={{ width: m[2] }} /></div><b>{m[2]}</b><span>{m[3]}</span><span className={`pill ${m[4] === 'Attention' ? 'checking' : 'success'}`}>{m[4]}</span></div>)}</Card>
        <Card><h3>Farmer waiting time</h3><div className="donut"><strong>19<small>min</small></strong></div><p className="center-note">Target: below 25 minutes</p><div className="legend"><span>● Within target</span><span>● Needs attention</span></div></Card>
      </div>
      <Card><div className="card-heading"><div><h3>Procurement overview</h3><p>Crop-wise procurement against current MSP.</p></div><button className="text-button" onClick={() => onNavigate('procurement')}>View details →</button></div><div className="table-wrap"><table><thead><tr><th>Crop</th><th>Quantity</th><th>Value</th><th>MSP compliance</th></tr></thead><tbody>{procurement.map(r => <tr key={r[0]}><td><b>{r[0]}</b></td><td>{r[1]}</td><td>{r[2]}</td><td><span className="pill success">{r[3]}</span></td></tr>)}</tbody></table></div></Card>
    </>
  )
}
