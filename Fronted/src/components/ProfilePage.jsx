import { useNavigate } from 'react-router-dom'
import { ArrowLeft, User, Mail, Shield, Key, Camera } from 'lucide-react'

export default function ProfilePage({ userName }) {
  const navigate = useNavigate()
  return (
    <main className="main-content placeholder-page">
      <div style={{ width: '100%', maxWidth: '800px', textAlign: 'left' }}>
        <button className="back-btn" onClick={() => navigate(-1)} style={{ marginBottom: '24px' }}>
          <ArrowLeft size={20} /> Geri Dön
        </button>
        <div className="analysis-section" style={{ display: 'flex', alignItems: 'center', gap: '32px', padding: '40px' }}>
          <div style={{ 
            width: '120px', 
            height: '120px', 
            borderRadius: '30px', 
            background: 'var(--primary-gradient)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            fontSize: '3rem',
            fontWeight: 900,
            boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)'
          }}>
            {userName?.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h1 style={{ marginBottom: '4px' }}>{userName}</h1>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginTop: '24px' }}>
          <div className="analysis-section">
            <h3 style={{ marginBottom: '20px' }}>İletişim Bilgileri</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="var(--text-secondary)" />
                <span>{userName?.toLowerCase().replace(' ', '.')}@sirket.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Key size={18} color="var(--text-secondary)" />
                <span>Şifre Değiştir</span>
              </div>
            </div>
          </div>
          <div className="analysis-section">
            <h3 style={{ marginBottom: '20px' }}>Yetkiler</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Kamera Erişimi', 'Rapor Silme', 'Kullanıcı Ekleme', 'Sistem Ayarları'].map(tag => (
                <span key={tag} className="status-badge verified" style={{ padding: '8px 12px' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}