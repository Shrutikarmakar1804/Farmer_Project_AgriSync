import Card from './_Card'

export default function Support() {
  return (
    <>
      <div className="page-heading"><div><small>FARMER SUPPORT</small><h1>Support center</h1><p>Help for booking, queue tracking, procurement and payments.</p></div></div>
      <div className="support-grid">
        <Card><span className="support-icon">☎</span><h3>Helpline</h3><p>1800-000-2026</p></Card>
        <Card><span className="support-icon">?</span><h3>Procurement help</h3><p>Get guidance about your slot and token.</p></Card>
        <Card><span className="support-icon">₹</span><h3>Payment support</h3><p>Check payment and transaction status.</p></Card>
        <Card><span className="support-icon">⌖</span><h3>Mandi location</h3><p>View your assigned procurement center.</p></Card>
      </div>
    </>
  )
}
