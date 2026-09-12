import Card from './_Card'

const msp = [['Wheat','₹2,585 / q'],['Paddy','₹2,369 / q'],['Mustard','₹6,200 / q'],['Maize','₹2,400 / q']]

export default function MSPMonitoring() {
  return (
    <>
      <div className="page-heading"><div><small>MSP COMPLIANCE</small><h1>MSP Monitoring</h1><p>Ensure procurement centers are operating against approved MSP reference prices.</p></div></div>
      <div className="msp-grid">{msp.map(r => <Card key={r[0]}><span className="crop-emoji">₹</span><h3>{r[0]}</h3><strong className="msp-price">{r[1]}</strong><span className="pill success">Compliant</span></Card>)}</div>
    </>
  )
}
