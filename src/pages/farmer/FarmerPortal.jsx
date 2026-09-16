import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { AnimatePresence, motion } from 'framer-motion'

import FarmerDashboard from './Farmer dashboard.jsx'
import BookSlot from './Book Slot.jsx'
import LiveQueue from './Live Queue.jsx'
import MSPPrices from './MSP Prices.jsx'
import History from './History.jsx'
import Support from './Support.jsx'

const msp = [
  ['Wheat', '₹2,585 / q'],
  ['Paddy (Common)', '₹2,369 / q'],
  ['Mustard', '₹6,200 / q'],
  ['Maize', '₹2,400 / q'],
]

export default function FarmerPortal() {
  const { t } = useLanguage()
  const [page, setPage] = useState('dashboard')
  const [booked, setBooked] = useState(false)
  const [activeToken, setActiveToken] = useState(null)

  const [crop, setCrop] = useState('Wheat')
  const [qty, setQty] = useState('25')
  const [quantityUnit, setQuantityUnit] = useState('quintals')
  const [slot, setSlot] = useState('10:30 AM')

  const [toast, setToast] = useState('')

  const token = activeToken?.id || (booked ? 'TK-1086' : 'TK-1082')
  const ahead = activeToken?.farmersAhead ?? (booked ? 4 : 3)
  const wait = activeToken?.estimatedWaitMinutes ?? (booked ? 34 : 18)

  const notify = message => {
    setToast(message)

    setTimeout(() => {
      setToast('')
    }, 2400)
  }

  const book = (serverToken) => {
    setBooked(true)
    if (serverToken) setActiveToken(serverToken)

    const unitNames = {
      kg: 'kg',
      quintals: 'quintals',
      tonnes: 'tonnes',
    }

    notify(
      `Slot booked successfully • Token TK-1086 • ${qty} ${unitNames[quantityUnit]}`
    )

    setPage('queue')
  }

  const nav = [
    ['dashboard', '⌂', 'Dashboard'],
    ['book', '▣', 'Book Slot'],
    ['queue', '☷', 'Live Queue'],
    ['history', '◷', 'History'],
    ['msp', '₹', 'MSP Prices'],
    ['support', '?', 'Support'],
  ]

  const pages = {
    dashboard: (
      <FarmerDashboard
        token={token}
        slot={slot}
        ahead={ahead}
        wait={wait}
        onNavigate={setPage}
        msp={msp}
      />
    ),

    book: (
      <BookSlot
        crop={crop}
        setCrop={setCrop}
        qty={qty}
        setQty={setQty}
        slot={slot}
        setSlot={setSlot}
        onBook={book}
      />
    ),

    queue: (
      <LiveQueue
        token={token}
        ahead={ahead}
        wait={wait}
        onRefresh={() => notify('Queue refreshed successfully')}
      />
    ),

    history: <History />,

    msp: <MSPPrices />,

    support: <Support />,
  }

  return (
    <div className="portal farmer-portal">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="side-heading">
          <span>AgriSync</span>
          <small>{t('farmer')} Portal</small>
        </div>

        <div className="sidebar-nav">
          {nav.map(([id, icon, label]) => (
            <button
              key={id}
              className={page === id ? 'selected' : ''}
              onClick={() => setPage(id)}
            >
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </div>

        <div className="sidebar-note">
          <strong>{t('needHelp')}</strong>
          <span>{t('call')}</span>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="content">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {pages[page]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* TOAST */}
      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 10,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}