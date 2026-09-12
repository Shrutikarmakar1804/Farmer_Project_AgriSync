import { useState } from 'react'
import FarmerDashboard from './Farmer dashboard.jsx'
import BookSlot from './Book Slot.jsx'
import LiveQueue from './Live Queue.jsx'
import MSPPrices from './MSP Prices.jsx'
import History from './History'
import Support from './Support'

const msp = [['Wheat','₹2,585 / q'],['Paddy (Common)','₹2,369 / q'],['Mustard','₹6,200 / q'],['Maize','₹2,400 / q']]

export default function FarmerPortal() {
  const [page, setPage] = useState('dashboard')
  const [booked, setBooked] = useState(false)
  const [crop, setCrop] = useState('Wheat')
  const [qty, setQty] = useState('25')
  const [slot, setSlot] = useState('10:30 AM')
  const [toast, setToast] = useState('')

  const token = booked ? 'TK-1086' : 'TK-1082'
  const ahead = booked ? 4 : 3
  const wait = booked ? 34 : 18

  const notify = message => { setToast(message); setTimeout(() => setToast(''), 2500) }
  const bookSlot = () => { setBooked(true); notify('Slot booked successfully. Token TK-1086 generated.'); setPage('queue') }

  const nav = [
    ['dashboard','⌂','Dashboard'],['book','▣','Book Slot'],['queue','☷','Live Queue'],
    ['history','◷','History'],['msp','₹','MSP Prices'],['support','?','Support'],
  ]

  const pages = {
    dashboard: <FarmerDashboard token={token} slot={slot} ahead={ahead} wait={wait} onNavigate={setPage} msp={msp} />,
    book: <BookSlot crop={crop} setCrop={setCrop} qty={qty} setQty={setQty} slot={slot} setSlot={setSlot} onBook={bookSlot} />,
    queue: <LiveQueue token={token} ahead={ahead} wait={wait} onRefresh={() => notify('Queue refreshed')} />,
    history: <History />,
    msp: <MSPPrices />,
    support: <Support />,
  }

  return (
    <div className="portal farmer-portal">
      <aside className="sidebar"><div className="side-heading">Farmer Portal</div>
        {nav.map(([id, icon, label]) => <button key={id} className={page === id ? 'selected' : ''} onClick={() => setPage(id)}><span>{icon}</span>{label}</button>)}
        <div className="sidebar-note"><strong>Need help?</strong><span>Call 1800-000-2026</span></div>
      </aside>
      <main className="content">{pages[page]}</main>
      {toast && <div className="toast">{toast}</div>}
    </div>
  )
}
