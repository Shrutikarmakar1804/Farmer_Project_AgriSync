const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1').replace(/\/$/, '')
export class ApiError extends Error { constructor(message,status,payload){super(message);this.name='ApiError';this.status=status;this.payload=payload} }
export async function apiRequest(path,{method='GET',body,headers={},signal}={}){const token=localStorage.getItem('agrisync-access-token');const response=await fetch(`${API_BASE_URL}${path}`,{method,signal,headers:{...(body!==undefined?{'Content-Type':'application/json'}:{}),...(token?{Authorization:`Bearer ${token}`}:{ }),...headers},body:body!==undefined?JSON.stringify(body):undefined});let payload;try{payload=await response.json()}catch{payload={success:false,message:'Server returned a non-JSON response.'}}if(!response.ok)throw new ApiError(payload?.message||`Request failed with status ${response.status}`,response.status,payload);return payload}
export const apiLogin=identifier=>apiRequest('/auth/login',{method:'POST',body:{identifier}})
export const apiSignupFarmer=data=>apiRequest('/auth/signup-farmer',{method:'POST',body:data})
export const apiFarmerDashboard=()=>apiRequest('/farmer/dashboard')
export const apiBookSlot=data=>apiRequest('/farmer/book-slot',{method:'POST',body:data})
export const apiLiveQueue=()=>apiRequest('/farmer/live-queue')
export const apiMspPrices=params=>apiRequest(`/market/msp-prices${params?`?${new URLSearchParams(params)}`:''}`)
export const apiHistory=farmerId=>apiRequest(`/farmer/history/${encodeURIComponent(farmerId)}`)
export const apiSupportInfo=()=>apiRequest('/farmer/support-info')
export const apiCreateTicket=data=>apiRequest('/farmer/ticket',{method:'POST',body:data})
export const apiOperatorQueue=()=>apiRequest('/operator/queue')
export const apiScanQr=data=>apiRequest('/operator/scan-qr-pass',{method:'POST',body:data})
export const apiAdvisories=params=>apiRequest(`/market/advisory${params?`?${new URLSearchParams(params)}`:''}`)
export function saveSession({accessToken,user}){localStorage.setItem('agrisync-access-token',accessToken);localStorage.setItem('agrisync-user',JSON.stringify(user))}
export function clearSession(){localStorage.removeItem('agrisync-access-token');localStorage.removeItem('agrisync-user')}
export function getSession(){try{return{token:localStorage.getItem('agrisync-access-token'),user:JSON.parse(localStorage.getItem('agrisync-user')||'null')}}catch{return{token:null,user:null}}}
export { API_BASE_URL }
