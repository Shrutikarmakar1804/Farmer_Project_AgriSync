import FarmerPortal from '../../pages/farmer/FarmerPortal.jsx'
import { FarmerState } from './state/FarmerContext'

// Role gateway: owns Farmer state and delegates the feature UI to existing pages.
export default function FarmerRouter() {
  return <FarmerState><FarmerPortal /></FarmerState>
}
