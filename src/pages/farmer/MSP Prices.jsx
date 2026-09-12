import Card from './_Card'

const msp = [
  ['Wheat', '₹2,585 / q'],
  ['Paddy (Common)', '₹2,369 / q'],
  ['Mustard', '₹6,200 / q'],
  ['Maize', '₹2,400 / q'],
]

export default function MSPPrices() {
  return (
    <>
      <div className="page-heading"><div><small>PRICE INFORMATION</small><h1>MSP prices</h1><p>Reference prices to help farmers understand procurement rates.</p></div></div>
      <div className="msp-grid">{msp.map(([name, price]) => <Card key={name}><span className="crop-emoji">🌾</span><h3>{name}</h3><strong className="msp-price">{price}</strong><small>Current reference MSP</small></Card>)}</div>
    </>
  )
}
