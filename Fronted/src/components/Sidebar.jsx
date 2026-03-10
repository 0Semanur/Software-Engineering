import { FileText, Map, Users, Settings, Sparkles, HelpCircle, LayoutDashboard, BarChart3, ShieldCheck } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Sidebar.css'

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/bolgeler', icon: Map, label: 'Bölgeler' },
  { path: '/olaylar', icon: FileText, label: 'Olay Raporları' },
  { path: '/istatistikler', icon: BarChart3, label: 'İstatistikler' },
  { path: '/kullanicilar', icon: Users, label: 'Kullanıcı Yönetimi' },
  { path: '/guvenlik', icon: ShieldCheck, label: 'Güvenlik Politikaları' },
  { path: '/ayarlar', icon: Settings, label: 'Sistem Ayarları' },
]

export default function Sidebar({ isOpen }) {
  const navigate = useNavigate();

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <Sparkles size={24} className="logo-sparkle" />
        <span className="sidebar-logo-text">ISG AI</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(({ path, icon: Icon, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <Icon size={20} className="nav-icon" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button 
          className="help-btn" 
          onClick={() => navigate('/destek')}
        >
          <HelpCircle size={20} />
          <span>Destek Merkezi</span>
        </button>
      </div>
    </aside>
  )
}
