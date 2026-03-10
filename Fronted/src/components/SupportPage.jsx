import { useNavigate } from 'react-router-dom'
import { ArrowLeft, HelpCircle, MessageSquare, BookOpen, Phone, Search } from 'lucide-react'

export default function SupportPage() {
  const navigate = useNavigate()
  return (
    <main className="main-content placeholder-page">
      <div style={{ width: '100%', maxWidth: '900px', textAlign: 'left' }}>
        <button className="back-btn" onClick={() => navigate(-1)} style={{ marginBottom: '24px' }}>
          <ArrowLeft size={20} /> Geri Dön
        </button>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Nasıl yardımcı olabiliriz?</h1>
          <div className="search-box" style={{ maxWidth: '500px', margin: '0 auto', background: 'white', border: '1px solid var(--border-color)' }}>
            <Search size={20} color="var(--text-secondary)" />
            <input type="text" placeholder="Yardım makalelerinde ara..." className="search-input" style={{ color: 'var(--text-primary)' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { icon: BookOpen, title: 'Kullanım Kılavuzu', desc: 'Sistemi nasıl kullanacağınıza dair adım adım rehberler.' },
            { icon: MessageSquare, title: 'Canlı Destek', desc: 'Uzman ekibimizle anlık olarak yazışın.' },
            { icon: Phone, title: 'Bize Ulaşın', desc: '7/24 teknik destek hattımızdan bize ulaşın.' }
          ].map((item, i) => (
            <div key={i} className="analysis-section" style={{ textAlign: 'center', padding: '32px' }}>
              <div style={{ width: '56px', height: '56px', background: 'var(--info-bg)', borderRadius: '16px', color: 'var(--info)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <item.icon size={28} />
              </div>
              <h4 style={{ fontWeight: 800, marginBottom: '12px' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}