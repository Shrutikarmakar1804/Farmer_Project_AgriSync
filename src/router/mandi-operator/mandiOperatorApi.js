import { apiRequest } from '../../api/client'

// Frontend gateway for all Mandi Operator-domain backend endpoints.
export const mandiOperatorApi = {
  queue: (signal) => apiRequest('/operator/queue', { signal }),
  scanQrPass: (payload, signal) => apiRequest('/operator/scan-qr-pass', { method: 'POST', body: payload, signal }),
  mspPrices: (params, signal) => apiRequest(`/market/msp-prices${params ? `?${new URLSearchParams(params)}` : ''}`, { signal }),
  advisory: (params, signal) => apiRequest(`/market/advisory${params ? `?${new URLSearchParams(params)}` : ''}`, { signal }),
  generateReceipt: (payload, signal) => apiRequest('/procurement/generate-receipt', { method: 'POST', body: payload, signal }),
}
