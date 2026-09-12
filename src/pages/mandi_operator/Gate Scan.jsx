import Card from './_Card'

export default function GateScan({ onProceed }) {
  return (
    <>
      <div className="page-heading"><div><small>GATE VERIFICATION</small><h1>QR Gate Verification</h1><p>Verify the farmer token before sending it to quality check.</p></div></div>
      <div className="gate-grid">
        <Card className="scan-card"><div className="qr-large">{Array.from({ length: 49 }).map((_, i) => <i key={i} className={i % 4 !== 1 ? 'filled' : ''}/>)}</div><p>Scan farmer token QR code</p></Card>
        <Card><span className="eyebrow">SCANNED TOKEN</span><h2>TK-1082</h2><div className="farmer-detail"><b>R. Kumar</b><span>Wheat · 50 quintals</span><span>Vehicle: WB-02-X-4321</span></div><button className="primary" onClick={onProceed}>Verify & Proceed</button></Card>
      </div>
    </>
  )
}
