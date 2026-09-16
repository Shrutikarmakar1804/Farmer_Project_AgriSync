import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Auth from './pages/Auth.jsx' // Added Auth import
import FarmerRouter from './router/farmer/FarmerRouter.jsx'
import MandiOperatorRouter from './router/mandi-operator/MandiOperatorRouter.jsx'
import GovernmentRouter from './router/government/GovernmentRouter.jsx'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import LanguageSelector from './components/LanguageSelector'
import { getSession } from './api/client'

function AppContent() {
  const [session] = useState(() => getSession())
  const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(session.token && session.user))
  const [role, setRole] = useState(() => {
    const savedRole = session.user?.role
    return savedRole === 'OPERATOR' ? 'operator' : savedRole === 'ADMIN' ? 'government' : 'farmer'
  })
  const { t } = useLanguage()

  // Added handler to map Auth.jsx roles to your existing App.jsx roles
  const handleAuthSuccess = (selectedAuthRole) => {
    if (selectedAuthRole === 'Farmer') setRole('farmer')
    else if (selectedAuthRole === 'Mandi Operator') setRole('operator')
    else if (selectedAuthRole === 'Government Officer') setRole('government')
    
    setIsAuthenticated(true)
  }

  const roles = [
    ['farmer', t('farmer')],
    ['operator', t('operator')],
    ['government', t('government')],
  ]

  // Render Auth page if not authenticated
  if (!isAuthenticated) {
    return <Auth onAuthSuccess={handleAuthSuccess} />
  }

  // Your original application shell renders only after authentication
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <motion.div className="brand-mark" animate={{ rotate: [0, -4, 4, 0] }} transition={{ duration: 4, repeat: Infinity }}>🌾</motion.div>
          <div><strong>AGRISync</strong><span>Digital Procurement Platform</span></div>
        </div>
        <div className="role-switcher">
          {roles.map(([id, label]) => <button key={id} className={role === id ? 'active' : ''} onClick={() => setRole(id)}>{label}</button>)}
        </div>
        <div className="top-actions">
          {(role === 'farmer' || role === 'operator') && <LanguageSelector />}
          <div className="top-profile"><span className="online-dot" />{session.user?.name || (role === 'farmer' ? 'R. Kumar' : role === 'operator' ? 'Operator' : 'Department Officer')}</div>
        </div>
      </header>
      <AnimatePresence mode="wait">
        <motion.div key={role} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .22 }}>
          {role === 'farmer' ? <FarmerRouter /> : role === 'operator' ? <MandiOperatorRouter /> : <GovernmentRouter />}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  return <LanguageProvider><AppContent /></LanguageProvider>
}