export const initialMandiOperatorState = { loading: false, error: null, queue: null, scan: null, receipt: null }
export function mandiOperatorReducer(state, action) {
  switch (action.type) {
    case 'REQUEST': return { ...state, loading: true, error: null }
    case 'SUCCESS': return { ...state, loading: false, error: null, [action.key]: action.payload }
    case 'ERROR': return { ...state, loading: false, error: action.error }
    default: return state
  }
}
