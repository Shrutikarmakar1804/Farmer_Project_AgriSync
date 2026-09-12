import Card from './_Card'

export default function Procurement({ procurement }) {
  return (
    <>
      <div className="page-heading"><div><small>STATE PROCUREMENT</small><h1>Procurement Monitoring</h1><p>Track quantity and value procured by crop.</p></div></div>
      <Card><div className="table-wrap"><table><thead><tr><th>Crop</th><th>Quantity</th><th>Procurement value</th><th>MSP compliance</th></tr></thead><tbody>{procurement.map(r => <tr key={r[0]}><td><b>{r[0]}</b></td><td>{r[1]}</td><td>{r[2]}</td><td><span className="pill success">{r[3]}</span></td></tr>)}</tbody></table></div></Card>
    </>
  )
}
