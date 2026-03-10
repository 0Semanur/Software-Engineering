import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, Lock, CheckCircle2, AlertTriangle, Info, BellRing, Settings, Edit2 } from 'lucide-react'

export default function SecurityPoliciesPage() {
  const navigate = useNavigate()
  const policies = [
    { id: 1, title: 'Baret Kullanım Zorunluluğu', status: 'Aktif', desc: 'Şantiye sahasında baret kullanımı her zaman zorunludur. Sistem otomatik olarak tespit eder.', severity: 'Yüksek' },
    { id: 2, title: 'Kısıtlı Alan Erişimi', status: 'Aktif', desc: 'Yetkisiz personelin tehlikeli bölgelere girmesi durumunda anında bildirim gönderilir.', severity: 'Kritik' },
    { id: 3, title: 'Yüksek Görünürlüklü Yelek', status: 'Aktif', desc: 'Tüm çalışanların reflektörlü yelek giymesi gerekmektedir.', severity: 'Yüksek' },
    { id: 4, title: 'Araç Hızı Limiti', status: 'Beklemede', desc: 'Depo içerisindeki araçların hız limitlerine uyması denetlenir.', severity: 'Orta' },
  ]

  return (
    <main className="main-content placeholder-page">
      <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'left' }}>
        <button className="back-btn" onClick={() => navigate(-1)} style={{ marginBottom: '24px' }}>
          <ArrowLeft size={20} /> Geri Dön
        </button>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: 0 }}>
            <ShieldCheck size={32} color="var(--success)" /> Güvenlik Politikaları
          </h1>
          <button className="primary-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Settings size={18} /> Yeni Politika Oluştur
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {policies.map(policy => (
            <div key={policy.id} className="analysis-section" style={{ position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ padding: '10px', background: 'var(--success-bg)', borderRadius: '12px', color: 'var(--success)' }}>
                  <Lock size={20} />
                </div>
                <span className={`status-badge ${policy.status === 'Aktif' ? 'reviewed' : 'reported'}`}>
                  {policy.status}
                </span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>{policy.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>{policy.desc}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <AlertTriangle size={16} color={policy.severity === 'Kritik' ? 'var(--danger)' : 'var(--warning)'} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-secondary)' }}>Önem: {policy.severity}</span>
                </div>
                <button className="icon-btn" style={{ padding: '6px' }}><Edit2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}