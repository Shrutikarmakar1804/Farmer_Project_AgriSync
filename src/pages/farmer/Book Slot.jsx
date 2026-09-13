import { motion } from 'framer-motion'
import Card from './_Card'
export default function BookSlot({crop,setCrop,qty,setQty,slot,setSlot,onBook}){
 const slots=['09:30 AM','10:30 AM','11:30 AM','01:00 PM','02:30 PM']
 return <motion.div initial={{opacity:0,x:18}} animate={{opacity:1,x:0}}>
  <div className="page-heading"><div><small>SMART SCHEDULING</small><h1>Book Procurement Slot</h1><p>Choose your crop, quantity and preferred arrival window.</p></div><span className="pill success">Slots available</span></div>
  <div className="slot-grid"><Card><h3>Produce details</h3><p>Accurate quantity helps the mandi plan capacity.</p><div className="form-grid"><div className="field"><label>Crop</label><select value={crop} onChange={e=>setCrop(e.target.value)}><option>Wheat</option><option>Paddy</option><option>Mustard</option><option>Maize</option></select></div><div className="field"><label>Quantity (quintals)</label><input value={qty} onChange={e=>setQty(e.target.value)} type="number" min="1"/></div></div><div className="field" style={{marginTop:15}}><label>Preferred date</label><input type="date" defaultValue="2026-09-14"/></div></Card>
   <Card><h3>Arrival window</h3><p>Select the slot that fits your travel plan.</p><div className="slot-options">{slots.map(s=><button className={slot===s?'active':''} key={s} onClick={()=>setSlot(s)}>{s}</button>)}</div><div style={{marginTop:24,padding:15,borderRadius:14,background:'#f5f9f2'}}><span className="eyebrow">SELECTED</span><h3 style={{marginTop:6}}>{slot}</h3><p style={{marginBottom:0}}>{crop} • {qty} quintals</p></div><button className="primary" style={{marginTop:18,width:'100%'}} onClick={onBook}>Confirm & Generate Token</button></Card>
  </div>
 </motion.div>
}
