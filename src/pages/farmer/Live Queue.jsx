import Card from './_Card'

const queue = [
  { token: 'TK-1082', farmer: 'R. Kumar', crop: 'Wheat', qty: '50 q', status: 'Verified', wait: 18 },
  { token: 'TK-1083', farmer: 'S. Das', crop: 'Paddy', qty: '35 q', status: 'Quality Check', wait: 28 },
  { token: 'TK-1084', farmer: 'A. Mondal', crop: 'Wheat', qty: '42 q', status: 'Waiting', wait: 41 },
  { token: 'TK-1085', farmer: 'P. Roy', crop: 'Mustard', qty: '20 q', status: 'Waiting', wait: 55 },
]

export default function LiveQueue({ token, ahead, wait, onRefresh }) {
  return (
    <>
      <div className="page-heading"><div><small>LIVE PROCUREMENT STATUS</small><h1>Track live queue</h1><p>Know exactly where you stand before reaching the mandi.</p></div><span className="live">● Live</span></div>
      <Card className="queue-card">
        <div><small>YOUR TOKEN</small><strong className="big-token">{token}</strong><div className="big-number">{ahead}<span>farmers ahead</span></div><p>Estimated waiting time: <b>{wait} minutes</b></p></div>
        <div className="steps">{['Gate Scan', 'Quality Check', 'Weighbridge', 'Payment'].map((s, i) => <div className={i < 2 ? 'done' : i === 2 ? 'current' : ''} key={s}><span>{i < 2 ? '✓' : i + 1}</span><label>{s}</label></div>)}</div>
      </Card>
      <Card>
        <div className="card-heading"><div><h3>Farmers in queue</h3><p>Updated just now</p></div><button className="secondary small" onClick={onRefresh}>↻ Refresh</button></div>
        <div className="table-wrap"><table><thead><tr><th>Token</th><th>Farmer</th><th>Crop</th><th>Quantity</th><th>Status</th><th>Wait</th></tr></thead>
          <tbody>{queue.map(item => <tr key={item.token}><td><b>{item.token}</b></td><td>{item.farmer}</td><td>{item.crop}</td><td>{item.qty}</td><td><span className={`pill ${item.status === 'Verified' ? 'success' : item.status === 'Waiting' ? 'waiting' : 'checking'}`}>{item.status}</span></td><td>{item.wait} min</td></tr>)}</tbody>
        </table></div>
      </Card>
    </>
  )
}
