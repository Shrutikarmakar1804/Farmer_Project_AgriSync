import { apiRequest } from '../../api/client'

// Frontend gateway for all Farmer-domain backend endpoints.
export const farmerApi = {
  dashboard: (signal) => apiRequest('/farmer/dashboard', { signal }),
  liveQueue: (signal) => apiRequest('/farmer/live-queue', { signal }),
  recommendedSlots: (signal) => apiRequest('/farmer/recommended-slots', { signal }),
  bookSlot: (payload, signal) => apiRequest('/farmer/book-slot', { method: 'POST', body: payload, signal }),
  token: (id, signal) => apiRequest(`/farmer/token/${encodeURIComponent(id)}`, { signal }),
  history: (farmerId, signal) => apiRequest(`/farmer/history/${encodeURIComponent(farmerId)}`, { signal }),
  supportInfo: (signal) => apiRequest('/farmer/support-info', { signal }),
  createTicket: (payload, signal) => apiRequest('/farmer/ticket', { method: 'POST', body: payload, signal }),
  mspPrices: (params, signal) => apiRequest(`/market/msp-prices${params ? `?${new URLSearchParams(params)}` : ''}`, { signal }),
  advisory: (params, signal) => apiRequest(`/market/advisory${params ? `?${new URLSearchParams(params)}` : ''}`, { signal }),
}
