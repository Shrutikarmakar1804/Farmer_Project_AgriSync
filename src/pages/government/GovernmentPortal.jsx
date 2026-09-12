import { useState } from 'react'
import Government from './Government'
import MandiMonitoring from './Mandi Monitoring.jsx'
import Procurement from './Procurement'
import MSPMonitoring from './MSP Monitoring.jsx'
import Reports from './Reports'
import Alerts from './Alerts'

const mandis=[['Kolkata Central Mandi','West Bengal','86%','18 min','On Track'],['Howrah Procurement Center','West Bengal','72%','24 min','On Track'],['Durgapur Mandi','West Bengal','93%','11 min','Busy'],['Siliguri Mandi','West Bengal','64%','31 min','Attention']]
const procurement=[['Wheat','1,240 q','₹32.05L','94%'],['Paddy','1,860 q','₹44.03L','91%'],['Mustard','520 q','₹32.24L','88%'],['Maize','410 q','₹9.84L','95%']]

export default function GovernmentPortal(){
  const [page,setPage]=useState('government'),[toast,setToast]=useState('')
  const notify=message=>{setToast(message);setTimeout(()=>setToast(''),2400)}
  const nav=[['government','▦','Government'],['mandis','⌖','Mandi Monitoring'],['procurement','₹','Procurement'],['msp','₹','MSP Monitoring'],['reports','▤','Reports'],['alerts','⚠','Alerts']]
  const pages={
    government:<Government mandis={mandis} procurement={procurement} onNavigate={setPage} onRefresh={()=>notify('Dashboard data refreshed')}/>,
    mandis:<MandiMonitoring mandis={mandis}/>,
    procurement:<Procurement procurement={procurement}/>,
    msp:<MSPMonitoring/>,
    reports:<Reports onGenerate={name=>notify(`${name} generated in demo mode`)}/>,
    alerts:<Alerts onToast={notify}/>
  }
  return <div className="portal government-portal"><aside className="sidebar"><div className="side-heading">Government Portal</div>{nav.map(([id,icon,label])=><button key={id} className={page===id?'selected':''} onClick={()=>setPage(id)}><span>{icon}</span>{label}</button>)}<div className="sidebar-note"><strong>Department view</strong><span>State procurement monitoring</span></div></aside><main className="content">{pages[page]}</main>{toast&&<div className="toast">{toast}</div>}</div>
}
