import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Layout, MapPin, Camera, Box } from 'lucide-react'

export default function RegionsPage() {
  const navigate = useNavigate()
  const regions = [
    { id: 1, name: 'A Sektörü', cameras: 4, alerts: 2, status: 'Aktif' },
    { id: 2, name: 'B Sektörü', cameras: 6, alerts: 0, status: 'Aktif' },
    { id: 3, name: 'Depo Alanı', cameras: 2, alerts: 5, status: 'Dikkat' },
    { id: 4, name: 'Yemekhane', cameras: 3, alerts: 0, status: 'Aktif' },
  ]

  return (
    <main className="main-content placeholder-page">
      <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'left' }}>
        <button className="back-btn" onClick={() => navigate(-1)} style={{ marginBottom: '24px' }}>
          <ArrowLeft size={20} /> Geri Dön
        </button>
        <h1 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <MapPin size={32} color="var(--accent-color)" /> Bölgeler
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
          {regions.map(region => (
            <div key={region.id} className="analysis-section" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
              <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {region.name}
                <span className={`status-badge ${region.alerts > 0 ? 'reported' : 'verified'}`}>
                  {region.status}
                </span>
              </h3>
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <Camera size={16} /> {region.cameras} Kamera Bağlı
                </p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px', color: region.alerts > 0 ? 'var(--danger)' : 'var(--success)' }}>
                  <Box size={16} /> {region.alerts} Aktif İhlal
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}