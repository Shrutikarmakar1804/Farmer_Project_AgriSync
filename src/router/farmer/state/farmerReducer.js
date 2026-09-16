export const initialFarmerState = {
  loading: false,
  error: null,
  dashboard: null,
  queue: null,
  booking: null,
  history: null,
  prices: null,
  support: null,
}

export function farmerReducer(state, action) {
  switch (action.type) {
    case 'REQUEST': return { ...state, loading: true, error: null }
    case 'SUCCESS': return { ...state, loading: false, error: null, [action.key]: action.payload }
    case 'ERROR': return { ...state, loading: false, error: action.error }
    case 'CLEAR_ERROR': return { ...state, error: null }
    default: return state
  }
}
