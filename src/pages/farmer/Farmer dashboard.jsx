import { motion } from 'framer-motion'
import Card from './_Card'
export default function FarmerDashboard({token,slot,ahead,wait,onNavigate,msp}){
 return <motion.div initial={{opacity:0}} animate={{opacity:1}}>
  <div className="page-heading"><div><small>FARMER PORTAL • TODAY</small><h1>Good morning, R. Kumar 🌾</h1><p>Your procurement journey, queue position and MSP information in one place.</p></div><button className="primary" onClick={()=>onNavigate('book')}>＋ Book a Slot</button></div>
  <div className="hero-card"><div className="hero-copy"><span className="hero-badge">NEXT PROCUREMENT</span><h2>Kolkata Central Mandi</h2><p>Bring your produce during your selected window. Your live token will update as the mandi processes the queue.</p><button className="secondary" onClick={()=>onNavigate('queue')}>Track live queue →</button></div>
   <Card><span className="eyebrow">YOUR TOKEN</span><div style={{fontSize:38,fontFamily:'Space Grotesk',fontWeight:700,margin:'8px 0'}}>{token}</div><span className="pill success">Confirmed • {slot}</span><p>{ahead} farmers ahead · estimated wait {wait} min</p></Card>
  </div>
  <div className="metric-grid">
   {[['Current queue',`${ahead} ahead`,'Live position'],['Estimated wait',`${wait} min`,'Based on current flow'],['Today’s MSP','₹2,585 / q','Wheat reference']].map(([a,b,c],i)=><motion.div className="metric" key={a} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*.08}}><span>{a}</span><b>{b}</b><span>{c}</span></motion.div>)}
  </div>
  <div style={{marginTop:18}}><Card><div className="card-heading"><div><h3>MSP snapshot</h3><p>Quick reference before you sell.</p></div><button className="text-button" onClick={()=>onNavigate('msp')}>View all →</button></div><div className="table-wrap"><table><thead><tr><th>Crop</th><th>MSP</th><th>Status</th></tr></thead><tbody>{msp.map(([crop,price])=><tr key={crop}><td><b>{crop}</b></td><td>{price}</td><td><span className="pill success">Reference</span></td></tr>)}</tbody></table></div></Card></div>
 </motion.div>
}
