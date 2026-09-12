import Card from './_Card'

export default function LiveQueue({ rows, onAction, onRefresh, onToast }) {
  return (
    <>
      <div className="page-heading"><div><small>MANDI OPERATOR PORTAL</small><h1>Live Queue</h1><p>Monitor farmer movement and reduce unnecessary waiting.</p></div><button className="primary" onClick={() => onAction('gate')}>⌗ Scan QR Slot</button></div>
      <div className="operator-stats"><div><b>24</b><span>Farmers today</span></div><div><b>7</b><span>In queue</span></div><div><b>18 min</b><span>Avg. waiting</span></div><div><b>₹8.4L</b><span>Procurement value</span></div></div>
      <div className="operator-layout">
        <Card><div className="card-heading"><div><h3>Live procurement queue</h3><p>Priority and status are updated here.</p></div><button className="secondary small" onClick={onRefresh}>↻ Refresh</button></div>
          <div className="table-wrap"><table><thead><tr><th>Token</th><th>Farmer</th><th>Crop</th><th>Quantity</th><th>Status</th><th>Action</th></tr></thead><tbody>{rows.map(r => <tr key={r[0]}><td><b>{r[0]}</b></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td><span className={`pill ${r[4] === 'Verified' ? 'success' : 'checking'}`}>{r[4]}</span></td><td><button className="action-btn" onClick={() => onAction('gate')}>Action ▾</button></td></tr>)}</tbody></table></div>
        </Card>
        <Card><h3>Quick Actions</h3><button className="quick green" onClick={() => onAction('gate')}>⌗ Scan QR Code <b>→</b></button><button className="quick gold" onClick={() => onToast('Queue override opened')}>⇄ Override Queue <b>→</b></button><button className="quick gold" onClick={() => onToast('No critical alerts')}>⚠ Alert Center <b>→</b></button></Card>
      </div>
      <Card><h3>Throughput today</h3><div className="bar-chart">{[45,32,55,68,82,72,90,65,52,38,28,20].map((h, i) => <span key={i} style={{ height: `${h}%` }}><i /></span>)}</div></Card>
    </>
  )
}
