import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Settings, Bell, Lock, Globe, Database } from 'lucide-react'

export default function SettingsPage() {
  const navigate = useNavigate()
  return (
    <main className="main-content placeholder-page">
      <div style={{ width: '100%', maxWidth: '800px', textAlign: 'left' }}>
        <button className="back-btn" onClick={() => navigate(-1)} style={{ marginBottom: '24px' }}>
          <ArrowLeft size={20} /> Geri Dön
        </button>
        <h1 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Settings size={32} color="var(--accent-color)" /> Sistem Ayarları
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { icon: Bell, title: 'Bildirim Ayarları', desc: 'Anlık uyarı ve e-posta tercihlerini yönetin.' },
            { icon: Lock, title: 'Güvenlik ve Gizlilik', desc: 'İki faktörlü doğrulama ve veri erişim izinleri.' },
            { icon: Globe, title: 'Dil ve Bölge', desc: 'Sistem dilini ve zaman dilimini ayarlayın.' },
            { icon: Database, title: 'Veri Yönetimi', desc: 'Rapor geçmişi ve yedekleme ayarları.' }
          ].map((item, i) => (
            <div key={i} className="analysis-section" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ padding: '12px', background: 'var(--info-bg)', borderRadius: '12px', color: 'var(--info)' }}>
                <item.icon size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontWeight: 800 }}>{item.title}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}