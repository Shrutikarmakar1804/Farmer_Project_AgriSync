import Card from './_Card'

export default function Payments({ quantity, onToast }) {
  const amount = quantity * 2585
  return (
    <>
      <div className="page-heading"><div><small>PAYMENT STATUS</small><h1>Procurement Payment</h1><p>Payment status for the completed transaction.</p></div></div>
      <Card className="payment-card"><span className="pill success">Payment Completed</span><h2>TK-1082</h2><div className="payment-grid"><div><span>Net weight</span><b>{quantity.toFixed(1)} quintals</b></div><div><span>MSP rate</span><b>₹2,585 / q</b></div><div><span>Amount</span><b>₹{amount.toLocaleString('en-IN')}</b></div></div><button className="primary" onClick={() => onToast('Receipt downloaded in demo mode')}>Download Receipt</button></Card>
    </>
  )
}
