import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BarChart3, TrendingUp, Users, AlertTriangle } from 'lucide-react'

export default function StatisticsPage() {
  const navigate = useNavigate()
  return (
    <main className="main-content placeholder-page">
      <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'left' }}>
        <button className="back-btn" onClick={() => navigate(-1)} style={{ marginBottom: '24px' }}>
          <ArrowLeft size={20} /> Geri Dön
        </button>
        <h1 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <BarChart3 size={32} color="var(--accent-color)" /> İstatistikler
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          <div className="analysis-section">
            <h3><TrendingUp size={20} color="var(--success)" /> Haftalık Trend</h3>
            <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '10px', marginTop: '20px' }}>
              {[40, 70, 45, 90, 65, 80, 30].map((h, i) => (
                <div key={i} style={{ flex: 1, background: 'var(--accent-color)', height: `${h}%`, borderRadius: '4px' }}></div>
              ))}
            </div>
          </div>
          <div className="analysis-section">
            <h3><AlertTriangle size={20} color="var(--danger)" /> En Sık İhlaller</h3>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Baret Yok</span>
                <span style={{ fontWeight: 800 }}>%45</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px' }}>
                <div style={{ width: '45%', height: '100%', background: 'var(--danger)', borderRadius: '4px' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Yelek Yok</span>
                <span style={{ fontWeight: 800 }}>%30</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px' }}>
                <div style={{ width: '30%', height: '100%', background: 'var(--warning)', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}