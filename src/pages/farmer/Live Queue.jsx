import { motion } from 'framer-motion'
import Card from './_Card'
export default function LiveQueue({token,ahead,wait,onRefresh}){
 return <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}}>
  <div className="page-heading"><div><small>LIVE OPERATIONS</small><h1>Your Live Queue</h1><p>Follow your token as farmers move through gate, quality and weighbridge.</p></div><button className="secondary" onClick={onRefresh}>↻ Refresh</button></div>
  <div className="queue-banner"><div className="queue-token"><span>YOUR TOKEN</span><b>{token}</b><small>Active in queue</small></div><Card><span className="eyebrow">POSITION</span><h2 style={{fontFamily:'Space Grotesk',margin:'6px 0'}}>{ahead} <small>farmers ahead</small></h2><div className="progress-line"><span style={{width:`${Math.max(25,100-ahead*12)}%`}}/></div><p style={{margin:0}}>Estimated wait: <b>{wait} minutes</b></p></Card><Card><span className="eyebrow">NEXT STEP</span><h3 style={{marginTop:7}}>Gate verification</h3><p>Your token will be called when the gate lane is ready.</p><span className="pill checking">In queue</span></Card></div>
  <Card><div className="card-heading"><div><h3>Queue movement</h3><p>Typical processing flow at the mandi.</p></div></div><div className="table-wrap"><table><thead><tr><th>Stage</th><th>Status</th><th>Typical time</th></tr></thead><tbody>{[['Gate verification','Completed','2 min'],['Quality check','Next','6 min'],['Weighbridge','Pending','5 min'],['Payment','Pending','2 min']].map((r,i)=><motion.tr key={r[0]} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:i*.08}}><td><b>{r[0]}</b></td><td><span className={`pill ${r[1]==='Completed'?'success':'checking'}`}>{r[1]}</span></td><td>{r[2]}</td></motion.tr>)}</tbody></table></div></Card>
 </motion.div>
}
