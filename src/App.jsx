import { useState } from 'react'
import './App.css'
import FarmerPortal from './pages/farmer/FarmerPortal'
import MandiOperatorPortal from './pages/mandi_operator/MandiOperatorPortal'
import GovernmentPortal from './pages/government/GovernmentPortal'

export default function App() {
  const [role,setRole]=useState('farmer')
  return <div className="app-shell">
    <header className="topbar">
      <div className="brand"><div className="brand-mark">🌾</div><div><strong>AGRISync</strong><span>Digital Procurement Platform</span></div></div>
      <div className="role-switcher">
        <button className={role==='farmer'?'active':''} onClick={()=>setRole('farmer')}>Farmer</button>
        <button className={role==='operator'?'active':''} onClick={()=>setRole('operator')}>Mandi Operator</button>
        <button className={role==='government'?'active':''} onClick={()=>setRole('government')}>Government</button>
      </div>
      <div className="top-profile"><span className="online-dot"/>{role==='farmer'?'R. Kumar':role==='operator'?'Operator':'Department Officer'}</div>
    </header>
    {role==='farmer'&&<FarmerPortal/>}
    {role==='operator'&&<MandiOperatorPortal/>}
    {role==='government'&&<GovernmentPortal/>}
  </div>
}
