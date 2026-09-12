import { useState } from 'react'
import LiveQueue from './Live Queue.jsx'
import GateScan from './Gate Scan.jsx'
import QualityCheck from './Quality Check.jsx'
import Weighbridge from './Weighbridge.jsx'
import Payments from './Payments.jsx'
import Analytics from './Analytics.jsx'

const seed = [
  ['TK-1081','Kahan Namer','Wheat','50 q','Verified'],['TK-1082','R. Kumar','Wheat','50 q','Verified'],
  ['TK-1083','Boghal Namar','Paddy','35 q','Inspecting'],['TK-1084','Nurhar Raner','Wheat','10 q','Verified'],
  ['TK-1085','Rovari Kingar','Paddy','10 q','Verified'],
]

export default function OperatorPortal() {
  const [page,setPage]=useState('queue')
  const [rows]=useState(seed)
  const [gross,setGross]=useState('7250')
  const [tare,setTare]=useState('2250')
  const [grade,setGrade]=useState('A')
  const [toast,setToast]=useState('')
  const notify=message=>{setToast(message);setTimeout(()=>setToast(''),2400)}
  const net=Math.max(0,Number(gross||0)-Number(tare||0)), q=net/100
  const proceed=(message,next)=>{notify(message);setPage(next)}
  const nav=[['queue','▦','Live Queue'],['gate','⌗','Gate Scan'],['quality','✓','Quality Check'],['weighbridge','⚖','Weighbridge'],['payments','₹','Payments'],['analytics','▥','Analytics']]
  const pages={
    queue:<LiveQueue rows={rows} onAction={setPage} onRefresh={()=>notify('Queue refreshed')} onToast={notify}/>,
    gate:<GateScan onProceed={()=>proceed('Token verified successfully.','quality')}/>,
    quality:<QualityCheck grade={grade} setGrade={setGrade} onProceed={()=>proceed(`Grade ${grade} approved.`,'weighbridge')}/>,
    weighbridge:<Weighbridge gross={gross} tare={tare} setGross={setGross} setTare={setTare} onToast={notify} onProceed={()=>proceed('Transaction completed. Receipt generated.','payments')}/>,
    payments:<Payments quantity={q} onToast={notify}/>,
    analytics:<Analytics/>
  }
  return <div className="portal operator-portal"><aside className="sidebar"><div className="side-heading">Mandi Operator</div>{nav.map(([id,icon,label])=><button key={id} className={page===id?'selected':''} onClick={()=>setPage(id)}><span>{icon}</span>{label}</button>)}<div className="sidebar-note"><strong>System online</strong><span>All mandi services active</span></div></aside><main className="content">{pages[page]}</main>{toast&&<div className="toast">{toast}</div>}</div>
}
