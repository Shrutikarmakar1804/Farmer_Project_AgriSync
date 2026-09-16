import { createContext, useContext, useMemo, useReducer } from 'react'
import { mandiOperatorApi } from '../mandiOperatorApi'
import { initialMandiOperatorState, mandiOperatorReducer } from './mandiOperatorReducer'
const MandiOperatorContext = createContext(null)
export function MandiOperatorState({ children }) {
  const [state, dispatch] = useReducer(mandiOperatorReducer, initialMandiOperatorState)
  const call = async (key, request) => { dispatch({ type: 'REQUEST' }); try { const payload = await request(); dispatch({ type: 'SUCCESS', key, payload }); return payload } catch (error) { dispatch({ type: 'ERROR', error }); throw error } }
  const value = useMemo(() => ({ state, dispatch, api: mandiOperatorApi, actions: { loadQueue: () => call('queue', mandiOperatorApi.queue), scanQrPass: (payload) => call('scan', () => mandiOperatorApi.scanQrPass(payload)), generateReceipt: (payload) => call('receipt', () => mandiOperatorApi.generateReceipt(payload)) } }), [state])
  return <MandiOperatorContext.Provider value={value}>{children}</MandiOperatorContext.Provider>
}
export const useMandiOperator = () => useContext(MandiOperatorContext)
