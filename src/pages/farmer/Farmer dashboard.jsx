import Card from './_Card'

export default function FarmerDashboard({ token, slot, ahead, wait, onNavigate, msp }) {
  return (
    <>
      <div className="page-heading">
        <div><small>FARMER DASHBOARD</small><h1>Know your turn. Sell without the wait.</h1><p>Book a procurement slot and track every step from your phone.</p></div>
        <span className="live">● Live system</span>
      </div>

      <div className="farmer-hero">
        <div>
          <span className="eyebrow">YOUR NEXT PROCUREMENT</span>
          <h2>{ahead} farmers ahead</h2>
          <p>Estimated waiting time <strong>{wait} minutes</strong></p>
          <div className="button-row">
            <button className="primary" onClick={() => onNavigate('book')}>Book New Slot</button>
            <button className="secondary" onClick={() => onNavigate('queue')}>Track Live Queue</button>
          </div>
        </div>
        <div className="hero-art">🌾<br /><span>Smart Mandi</span></div>
      </div>

      <div className="stat-grid">
        <Card><span className="stat-icon">🎟️</span><div><b>{token}</b><small>Current token</small></div></Card>
        <Card><span className="stat-icon">🕒</span><div><b>Today · {slot}</b><small>Next procurement slot</small></div></Card>
        <Card><span className="stat-icon">₹</span><div><b>₹2,585 / q</b><small>Wheat MSP</small></div></Card>
      </div>

      <div className="two-col">
        <Card>
          <div className="card-heading"><div><h3>Today's procurement</h3><p>Live status of your token</p></div><span className="pill success">Verified</span></div>
          <div className="token-box">
            <div><small>TOKEN PASS</small><strong>{token}</strong></div>
            <div className="qr">{Array.from({ length: 25 }).map((_, i) => <i key={i} className={i % 3 !== 1 ? 'filled' : ''} />)}</div>
          </div>
          <div className="progress-label"><span>Queue progress</span><b>{ahead} ahead</b></div>
          <div className="progress"><span style={{ width: ahead <= 3 ? '58%' : '72%' }} /></div>
          <button className="full-button" onClick={() => onNavigate('queue')}>View Live Queue</button>
        </Card>

        <Card>
          <div className="card-heading"><div><h3>MSP prices</h3><p>Current reference prices</p></div><span>₹</span></div>
          {msp.map(([name, price]) => <div className="price-row" key={name}><span>{name}</span><b>{price}</b></div>)}
          <button className="text-button" onClick={() => onNavigate('msp')}>View all prices →</button>
        </Card>
      </div>
    </>
  )
}
