import Card from './_Card'

export default function QualityCheck({ grade, setGrade, onProceed }) {
  return (
    <>
      <div className="page-heading"><div><small>QUALITY ASSESSMENT</small><h1>Quality Check · TK-1082</h1><p>Record quality parameters and approve the procurement grade.</p></div></div>
      <Card>
        <div className="farmer-banner"><span className="avatar">R</span><div><b>R. Kumar</b><small>Token ID: TK-1082 · Crop: Wheat (50 q)</small></div></div>
        <div className="quality-grid">
          <div><h3>Input Parameters</h3><label>Moisture %<input defaultValue="12.4" /></label><label>Foreign Matter %<input defaultValue="0.8" /></label><label>Shrivelled Grains %<input defaultValue="1.2" /></label></div>
          <div><h3>Image Grade Analysis</h3><div className="grain-image">🌾 🌾 🌾<br/>🌾 🌾 🌾</div><div className="analysis-row"><span>AI Analysis: <b>94% confidence</b></span><span>Suggested Grade <strong>{grade}</strong></span></div></div>
        </div>
        <div className="button-row end"><button className="secondary" onClick={() => setGrade('A')}>Recalculate Grade</button><button className="secondary" onClick={() => setGrade(grade === 'A' ? 'B' : 'A')}>Override Grade</button><button className="primary" onClick={onProceed}>Approve for Weighbridge</button></div>
      </Card>
    </>
  )
}
