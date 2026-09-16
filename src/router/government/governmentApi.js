import { apiRequest } from '../../api/client'

// Frontend gateway for Government-domain backend endpoints.
export const governmentApi = {
  stateDashboard: (signal) => apiRequest('/admin/state-dashboard', { signal }),
  auditLedger: (signal) => apiRequest('/admin/audit-ledger', { signal }),
  mspPrices: (params, signal) => apiRequest(`/market/msp-prices${params ? `?${new URLSearchParams(params)}` : ''}`, { signal }),
  advisories: (params, signal) => apiRequest(`/market/advisory${params ? `?${new URLSearchParams(params)}` : ''}`, { signal }),
  generateReceipt: (payload, signal) => apiRequest('/procurement/generate-receipt', { method: 'POST', body: payload, signal }),
  verifyReceipt: (payload, signal) => apiRequest('/procurement/verify-receipt', { method: 'POST', body: payload, signal }),
}
