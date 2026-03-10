import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Users, UserPlus, Search, Edit2, Trash2, Mail, Shield } from 'lucide-react'

export default function UsersPage() {
  const navigate = useNavigate()
  const users = [
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet.yilmaz@sirket.com', role: 'Admin', status: 'Aktif' },
    { id: 2, name: 'Selin Kaya', email: 'selin.kaya@sirket.com', role: 'Operatör', status: 'Aktif' },
    { id: 3, name: 'Mehmet Öz', email: 'mehmet.oz@sirket.com', role: 'Gözlemci', status: 'Pasif' },
    { id: 4, name: 'Ayşe Demir', email: 'ayse.demir@sirket.com', role: 'Operatör', status: 'Aktif' },
  ]

  return (
    <main className="main-content placeholder-page">
      <div style={{ width: '100%', maxWidth: '1000px', textAlign: 'left' }}>
        <button className="back-btn" onClick={() => navigate(-1)} style={{ marginBottom: '24px' }}>
          <ArrowLeft size={20} /> Geri Dön
        </button>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: 0 }}>
            <Users size={32} color="var(--accent-color)" /> Kullanıcı Yönetimi
          </h1>
          <button className="primary-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <UserPlus size={18} /> Yeni Kullanıcı Ekle
          </button>
        </div>

        <div className="analysis-section" style={{ padding: '0', overflow: 'hidden' }}>
          <table className="events-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc' }}>
                <th style={{ padding: '16px 24px', textAlign: 'left' }}>Kullanıcı</th>
                <th style={{ padding: '16px 24px', textAlign: 'left' }}>Rol</th>
                <th style={{ padding: '16px 24px', textAlign: 'left' }}>Durum</th>
                <th style={{ padding: '16px 24px', textAlign: 'right' }}>İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} style={{ borderTop: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--info-bg)', color: 'var(--info)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                        {user.name.substring(0, 1)}
                      </div>
                      <div>
                        <p style={{ fontWeight: 700, margin: 0 }}>{user.name}</p>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span className="status-badge verified" style={{ background: '#eff6ff', color: '#2563eb' }}>{user.role}</span>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span className={`status-badge ${user.status === 'Aktif' ? 'reviewed' : 'reported'}`}>
                      {user.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                      <button className="icon-btn" style={{ padding: '6px' }}><Edit2 size={16} /></button>
                      <button className="icon-btn" style={{ padding: '6px', color: 'var(--danger)' }}><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}