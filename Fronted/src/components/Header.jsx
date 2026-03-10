import { useState, useEffect, useRef } from 'react'
import { Menu, Bell, Search, ChevronDown, LogOut, User, Settings as SettingsIcon, AlertCircle, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header({ onMenuClick, onLogout, userName }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const profileRef = useRef(null)
  const notificationRef = useRef(null)
  const navigate = useNavigate()

  const notifications = [
    { id: 1, type: 'alert', text: 'Kamera 01: Baret ihlali tespit edildi!', time: '2 dakika önce' },
    { id: 2, type: 'success', text: 'Sistem güncellendi: Versiyon 2.1.0 yayında.', time: '1 saat önce' },
    { id: 3, type: 'alert', text: 'Yeni bölge "Şantiye B" sisteme eklendi.', time: '3 saat önce' }
  ]

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false)
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      alert(`"${e.target.value}" araması yapılıyor...`)
    }
  }

  const handleProfileNavigation = (path) => {
    setShowProfileMenu(false)
    navigate(path)
  }

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-btn" onClick={onMenuClick} aria-label="Menü">
          <Menu size={24} />
        </button>
        <h1 className="header-title" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>İSG Gözetim Sistemi</h1>
      </div>

      <div className="header-center">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Sistem genelinde ara..." 
            className="search-input" 
            onKeyDown={handleSearch}
          />
        </div>
      </div>

      <div className="header-right">
        <div className="notification-wrapper" ref={notificationRef}>
          <button className="notification-btn" onClick={() => setShowNotifications(!showNotifications)}>
            <Bell size={22} />
            <span className="notification-badge">{notifications.length}</span>
          </button>
          
          {showNotifications && (
            <div className="notification-dropdown">
              <div className="dropdown-header">
                <h3>Bildirimler</h3>
                <span className="mark-read">Hepsini Oku</span>
              </div>
              <div className="notification-list">
                {notifications.map(notif => (
                  <div key={notif.id} className="notification-item">
                    <div className={`notif-icon ${notif.type}`}>
                      {notif.type === 'alert' ? <AlertCircle size={16} /> : <CheckCircle size={16} />}
                    </div>
                    <div className="notif-content">
                      <p>{notif.text}</p>
                      <span>{notif.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dropdown-footer" onClick={() => { setShowNotifications(false); navigate('/olaylar'); }}>Tümünü Gör</div>
            </div>
          )}
        </div>
        
        <div className="profile-container" ref={profileRef}>
          <div className="user-profile" onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <div className="user-avatar">
              <span>{userName?.substring(0, 2).toUpperCase()}</span>
            </div>
            <span className="user-name">{userName}</span>
            <ChevronDown size={14} style={{ color: 'rgba(255,255,255,0.5)', marginLeft: '4px' }} />
          </div>

          {showProfileMenu && (
            <div className="profile-dropdown">
              <div className="profile-info-header">
                <p className="profile-name">{userName}</p>
                <p className="profile-role">Admin</p>
              </div>
              <button onClick={() => handleProfileNavigation('/profil')}>
                <User size={16} /> Profilim
              </button>
              <button onClick={() => handleProfileNavigation('/ayarlar')}>
                <SettingsIcon size={16} /> Ayarlar
              </button>
              <div className="dropdown-divider"></div>
              <button className="logout-btn" onClick={onLogout}>
                <LogOut size={16} /> Çıkış Yap
              </button>
            </div>
          )}
        </div>

        <div className="company-logo">
          <div className="logo-icon">A</div>
          <span className="logo-text">COMPANY</span>
        </div>
      </div>
    </header>
  )
}
