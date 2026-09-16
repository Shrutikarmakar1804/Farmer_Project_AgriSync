import { createContext, useContext, useMemo, useReducer } from 'react'
import { farmerApi } from '../farmerApi'
import { farmerReducer, initialFarmerState } from './farmerReducer'

const FarmerContext = createContext(null)

export function FarmerState({ children }) {
  const [state, dispatch] = useReducer(farmerReducer, initialFarmerState)
  const call = async (key, request) => {
    dispatch({ type: 'REQUEST' })
    try { const payload = await request(); dispatch({ type: 'SUCCESS', key, payload }); return payload }
    catch (error) { dispatch({ type: 'ERROR', error }); throw error }
  }
  const value = useMemo(() => ({ state, dispatch, api: farmerApi, actions: {
    loadDashboard: () => call('dashboard', farmerApi.dashboard),
    loadQueue: () => call('queue', farmerApi.liveQueue),
    loadHistory: (id) => call('history', () => farmerApi.history(id)),
    loadPrices: (params) => call('prices', () => farmerApi.mspPrices(params)),
    loadSupport: () => call('support', farmerApi.supportInfo),
    bookSlot: (payload) => call('booking', () => farmerApi.bookSlot(payload)),
  }}), [state])
  return <FarmerContext.Provider value={value}>{children}</FarmerContext.Provider>
}

export const useFarmer = () => useContext(FarmerContext)
