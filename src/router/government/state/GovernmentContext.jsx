import { createContext, useContext, useMemo, useReducer } from 'react'
import { governmentApi } from '../governmentApi'
import { governmentReducer, initialGovernmentState } from './governmentReducer'
const GovernmentContext = createContext(null)
export function GovernmentState({ children }) {
  const [state, dispatch] = useReducer(governmentReducer, initialGovernmentState)
  const call = async (key, request) => { dispatch({ type: 'REQUEST' }); try { const payload = await request(); dispatch({ type: 'SUCCESS', key, payload }); return payload } catch (error) { dispatch({ type: 'ERROR', error }); throw error } }
  const value = useMemo(() => ({ state, dispatch, api: governmentApi, actions: { loadDashboard: () => call('dashboard', governmentApi.stateDashboard), loadAudit: () => call('audit', governmentApi.auditLedger), loadPrices: (params) => call('prices', () => governmentApi.mspPrices(params)), loadAdvisories: (params) => call('advisories', () => governmentApi.advisories(params)), generateReceipt: (payload) => call('procurement', () => governmentApi.generateReceipt(payload)), verifyReceipt: (payload) => call('procurement', () => governmentApi.verifyReceipt(payload)) } }), [state])
  return <GovernmentContext.Provider value={value}>{children}</GovernmentContext.Provider>
}
export const useGovernment = () => useContext(GovernmentContext)
