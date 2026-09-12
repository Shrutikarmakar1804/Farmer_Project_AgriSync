import Card from './_Card'

export default function Analytics() {
  return (
    <>
      <div className="page-heading"><div><small>MANDI ANALYTICS</small><h1>Procurement Analytics</h1><p>Operational view of throughput and waiting time.</p></div></div>
      <div className="operator-stats"><div><b>312 q</b><span>Total produce</span></div><div><b>94%</b><span>On-time processing</span></div><div><b>18 min</b><span>Average wait</span></div><div><b>₹8.4L</b><span>Total value</span></div></div>
      <Card><h3>Hourly throughput</h3><div className="bar-chart tall">{[25,38,42,55,70,82,90,74,62,50,35,20].map((h, i) => <span key={i} style={{ height: `${h}%` }}><i /></span>)}</div></Card>
    </>
  )
}
