import React, { useState } from 'react'

export default function Weighbridge({ gross, tare, setGross, setTare, onToast, onProceed }) {
  const [isCapturing, setIsCapturing] = useState(false)

  const grossNum = Number(gross || 0)
  const tareNum = Number(tare || 0)
  const net = Math.max(0, grossNum - tareNum)
  const quintals = net / 100

  const handleRecapture = () => {
    setIsCapturing(true)
    onToast?.('Recapturing weighbridge telemetry...')
    setTimeout(() => setIsCapturing(false), 800)
  }

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto', padding: '24px 16px', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', color: '#1e293b' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px', marginBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '3px 10px', borderRadius: '9999px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', background: '#dcfce7', color: '#166534' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              Scale Lane 02 · Active
            </span>
            <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#64748b' }}>TK-1082</span>
          </div>
          <h1 style={{ fontSize: '26px', fontWeight: 800, margin: '0 0 4px 0', color: '#0f172a' }}>
            R. Kumar <span style={{ fontWeight: 400, color: '#64748b' }}>| Grain Dispatch</span>
          </h1>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
            Record tare and gross weights to calculate net produce and certify invoice.
          </p>
        </div>

        {/* Status Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '8px 14px' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
          <div>
            <div style={{ fontSize: '10px', textTransform: 'uppercase', fontFamily: 'monospace', color: '#94a3b8' }}>Sensor Status</div>
            <div style={{ fontSize: '12px', fontWeight: 600, color: '#334155' }}>Calibrated & Verified</div>
          </div>
        </div>
      </div>

      {/* Main Form Container */}
      <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '28px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)' }}>
        
        {/* Row 1: Three Inputs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#475569', marginBottom: '8px' }}>
              Vehicle Number
            </label>
            <input 
              defaultValue="WB-02-X-4321" 
              style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'monospace', fontSize: '15px', fontWeight: 600, padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #cbd5e1', background: '#f8fafc', color: '#0f172a', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#475569', marginBottom: '8px' }}>
              Gross Weight
            </label>
            <div style={{ position: 'relative' }}>
              <input 
                type="number"
                value={gross}
                placeholder="0.0"
                onChange={e => setGross(e.target.value)}
                style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'monospace', fontSize: '15px', fontWeight: 600, padding: '11px 40px 11px 14px', borderRadius: '10px', border: '1.5px solid #cbd5e1', background: '#f8fafc', color: '#0f172a', outline: 'none' }}
              />
              <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '12px', fontWeight: 700, color: '#94a3b8', pointerEvents: 'none' }}>KG</span>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#475569', marginBottom: '8px' }}>
              Tare Weight
            </label>
            <div style={{ position: 'relative' }}>
              <input 
                type="number"
                value={tare}
                placeholder="0.0"
                onChange={e => setTare(e.target.value)}
                style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'monospace', fontSize: '15px', fontWeight: 600, padding: '11px 40px 11px 14px', borderRadius: '10px', border: '1.5px solid #cbd5e1', background: '#f8fafc', color: '#0f172a', outline: 'none' }}
              />
              <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', fontSize: '12px', fontWeight: 700, color: '#94a3b8', pointerEvents: 'none' }}>KG</span>
            </div>
          </div>

        </div>

        {/* Display Card: Net Weight Readout */}
        <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)', borderRadius: '16px', padding: '24px 28px', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
          <div>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#a5b4fc', fontWeight: 600, marginBottom: '6px' }}>
              Net Produce Weight
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '42px', fontWeight: 900, fontFamily: 'monospace', letterSpacing: '-0.02em', color: '#38bdf8' }}>
                {net.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
              </span>
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#94a3b8', fontFamily: 'monospace' }}>KG</span>
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px', padding: '12px 18px', textAlign: 'right' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c7d2fe', marginBottom: '4px' }}>Standard Metric</div>
            <div style={{ fontSize: '20px', fontWeight: 800, fontFamily: 'monospace', color: '#ffffff' }}>
              {quintals.toFixed(2)} <span style={{ fontSize: '13px', fontWeight: 400, color: '#c7d2fe' }}>Quintals</span>
            </div>
          </div>
        </div>

        {/* Row 2: Selects & Camera Stream Simulation */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '28px' }}>
          
          <div style={{ background: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0', padding: '18px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                Designated Warehouse Slot
              </label>
              <select style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', fontSize: '14px', outline: 'none', color: '#1e293b' }}>
                <option>WH-A (Bumper Crop Silo)</option>
                <option>WH-B (Standard Depot)</option>
                <option>WH-C (Cold Storage Annex)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
                Bag Packaging Type
              </label>
              <select style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#ffffff', fontSize: '14px', outline: 'none', color: '#1e293b' }}>
                <option>Jute / HDPE Heavy Duty (50 Kg)</option>
                <option>Standard Gunny Bags</option>
                <option>Direct Bulk Hopper Unload</option>
              </select>
            </div>
          </div>

          {/* Camera Telemetry Screen */}
          <div style={{ background: '#090d16', borderRadius: '14px', border: '1px solid #1e293b', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontFamily: 'monospace', textTransform: 'uppercase', color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(74, 222, 128, 0.2)' }}>
                ● Cam-01 Platform
              </span>
              <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#64748b' }}>1080p · 30 FPS</span>
            </div>

            <div style={{ textAlign: 'center', fontSize: '42px', padding: '8px 0' }}>
              🚚
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1e293b', paddingTop: '10px', fontSize: '12px', color: '#94a3b8' }}>
              <span style={{ color: '#4ade80', display: 'flex', alignItems: 'center', gap: '4px' }}>
                ✓ Position verified
              </span>
              <span style={{ fontSize: '10px', fontFamily: 'monospace', color: '#64748b' }}>Platform stable</span>
            </div>
          </div>

        </div>

        {/* Row 3: Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '12px', flexWrap: 'wrap', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
          
          <button
            onClick={handleRecapture}
            disabled={isCapturing}
            style={{ padding: '11px 20px', borderRadius: '10px', border: '1.5px solid #cbd5e1', background: '#ffffff', color: '#334155', fontWeight: 600, fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <span style={{ display: 'inline-block', transform: isCapturing ? 'rotate(360deg)' : 'none', transition: 'transform 0.6s' }}>🔄</span>
            Recapture Weight
          </button>

          <button
            onClick={onProceed}
            style={{ padding: '11px 24px', borderRadius: '10px', border: 'none', background: '#4f46e5', color: '#ffffff', fontWeight: 600, fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)' }}
          >
            Complete Transaction & Generate Receipt →
          </button>

        </div>

      </div>
    </div>
  )
}