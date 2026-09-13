import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import FarmerPortal from './pages/farmer/FarmerPortal.jsx'
import MandiOperatorPortal from './pages/mandi_operator/MandiOperatorPortal.jsx'
import GovernmentPortal from './pages/government/GovernmentPortal.jsx'
export default function App(){const [role,setRole]=useState('farmer');return <div className="app-shell"><header className="topbar"><div className="brand"><motion.div className="brand-mark" animate={{rotate:[0,-4,4,0]}} transition={{duration:4,repeat:Infinity}}>🌾</motion.div><div><strong>AGRISync</strong><span>Digital Procurement Platform</span></div></div><div className="role-switcher">{[['farmer','Farmer'],['operator','Mandi Operator'],['government','Government']].map(([id,label])=><button key={id} className={role===id?'active':''} onClick={()=>setRole(id)}>{label}</button>)}</div><div className="top-profile"><span className="online-dot"/>{role==='farmer'?'R. Kumar':role==='operator'?'Operator':'Department Officer'}</div></header><AnimatePresence mode="wait"><motion.div key={role} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.22}}>{role==='farmer'?<FarmerPortal/>:role==='operator'?<MandiOperatorPortal/>:<GovernmentPortal/>}</motion.div></AnimatePresence></div>}
