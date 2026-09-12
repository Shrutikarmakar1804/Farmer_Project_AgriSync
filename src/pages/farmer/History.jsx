import Card from './_Card'

const history = [
  ['TK-1074', 'Paddy', '40 q', '08 Sep 2026', '₹94,760'],
  ['TK-1058', 'Wheat', '32 q', '26 Aug 2026', '₹82,720'],
]

export default function History() {
  return (
    <>
      <div className="page-heading"><div><small>YOUR RECORDS</small><h1>Procurement history</h1><p>Completed transactions and payment records.</p></div></div>
      <Card>{history.map(row => <div className="history-row" key={row[0]}><span className="history-icon">✓</span><div><b>{row[0]} · {row[1]}</b><small>{row[2]} · {row[3]}</small></div><strong>{row[4]}</strong></div>)}</Card>
    </>
  )
}
