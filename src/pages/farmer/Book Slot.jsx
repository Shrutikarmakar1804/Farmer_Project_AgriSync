import Card from './_Card'

export default function BookSlot({ crop, setCrop, qty, setQty, slot, setSlot, onBook }) {
  return (
    <>
      <div className="page-heading"><div><small>PROCUREMENT SCHEDULE</small><h1>Book a procurement slot</h1><p>Choose a convenient slot and receive a digital token.</p></div></div>
      <Card className="form-card">
        <h3>Procurement details</h3>
        <div className="form-grid">
          <label>Crop type<select value={crop} onChange={e => setCrop(e.target.value)}><option>Wheat</option><option>Paddy</option><option>Mustard</option><option>Maize</option></select></label>
          <label>Expected quantity (quintals, kg, tons)<input value={qty} onChange={e => setQty(e.target.value)} type="number" min="1" /></label>
          <label>Date<input type="date" defaultValue="2026-09-12" /></label>
          <label>Preferred slot<select value={slot} onChange={e => setSlot(e.target.value)}><option>10:30 AM</option><option>11:00 AM</option><option>12:00 PM</option><option>2:00 PM</option></select></label>
        </div>
        <div className="info-box">💡 Estimated waiting time for this slot: <strong>18 minutes</strong>. You can monitor changes live.</div>
        <button className="primary" onClick={onBook}>Confirm & Generate Token</button>
      </Card>
    </>
  )
}
