import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import EventDetail from './components/EventDetail'
import Login from './components/Login'
import Register from './components/Register'
import RegionsPage from './components/RegionsPage'
import StatisticsPage from './components/StatisticsPage'
import SettingsPage from './components/SettingsPage'
import ProfilePage from './components/ProfilePage'
import SupportPage from './components/SupportPage'
import UsersPage from './components/UsersPage'
import SecurityPoliciesPage from './components/SecurityPoliciesPage'
import EventReportsTable from './components/EventReportsTable'
import './App.css'

function PlaceholderPage({ title }) {
  const navigate = useNavigate()
  return (
    <main className="main-content placeholder-page">
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginBottom: '16px' }}>{title}</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Bu sayfa tasarım aşamasındadır.</p>
        <button className="back-btn" onClick={() => navigate(-1)}>Geri Dön</button>
      </div>
    </main>
  )
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true'
  })
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem('userName') || 'Ahmet Yılmaz'
  })

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn)
    localStorage.setItem('userName', userName)
  }, [isLoggedIn, userName])

  const handleLogin = (name) => {
    setIsLoggedIn(true)
    if (name) setUserName(name)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userName')
  }

  if (!isLoggedIn) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleLogin} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
          onLogout={handleLogout} 
          userName={userName}
        />
        <Sidebar isOpen={sidebarOpen} />
        <Routes>
          <Route path="/" element={<Dashboard userName={userName} />} />
          <Route path="/olay/:id" element={<EventDetail />} />
          <Route path="/bolgeler" element={<RegionsPage />} />
          <Route path="/olaylar" element={
            <main className="main-content placeholder-page">
              <div style={{ width: '100%', maxWidth: '1200px' }}>
                <EventReportsTable />
              </div>
            </main>
          } />
          <Route path="/istatistikler" element={<StatisticsPage />} />
          <Route path="/kullanicilar" element={<UsersPage />} />
          <Route path="/guvenlik" element={<SecurityPoliciesPage />} />
          <Route path="/ayarlar" element={<SettingsPage />} />
          <Route path="/profil" element={<ProfilePage userName={userName} />} />
          <Route path="/destek" element={<SupportPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
