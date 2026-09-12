import Card from './_Card'

export default function Alerts({ onToast }) {
  return (
    <>
      <div className="page-heading"><div><small>ALERT CENTER</small><h1>Operational Alerts</h1><p>Prioritize mandi centers where farmer waiting time or capacity needs attention.</p></div></div>
      <div className="alert-list">
        <Card><span className="alert-icon">⚠</span><div><b>Siliguri Mandi has a 31-minute average wait.</b><p>Capacity utilization is high. Review queue allocation.</p></div><button className="secondary small" onClick={() => onToast('Alert assigned to mandi officer')}>Assign</button></Card>
        <Card><span className="alert-icon">⚠</span><div><b>Durgapur Mandi is at 93% utilization.</b><p>Monitor incoming slots for the next two hours.</p></div><button className="secondary small" onClick={() => onToast('Alert acknowledged')}>Acknowledge</button></Card>
      </div>
    </>
  )
}
