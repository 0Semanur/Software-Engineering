import { useState } from 'react'
import { ChevronDown, Settings, Maximize, LayoutGrid, Download, Share2, FileText } from 'lucide-react'
import KPICards from './KPICards'
import VideoPlayer from './VideoPlayer'
import EventReportsTable from './EventReportsTable'
import './Dashboard.css'

export default function Dashboard({ userName }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleAction = (action) => {
    console.log(`Action performed: ${action}`)
    setIsDropdownOpen(false)
    alert(`${action} işlemi başlatıldı.`)
  }

  return (
    <main className="main-content dashboard">
      <div className="dashboard-header">
        <div className="header-info">
          <h1 className="dashboard-title">Hoş Geldin, {userName}!</h1>
          <div className="dashboard-subtitle">
            <span className="status-dot active"></span>
            <span>Şantiye Analiz Paneli - Bölge: A Sektörü (Kamera 01)</span>
          </div>
        </div>
        <div className="dashboard-actions">
          <div className="dropdown-wrapper">
            <button
              className="action-dropdown"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FileText size={18} />
              Eylemler
              <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={() => handleAction('Ayarları Düzenle')}>
                  <Settings size={14} style={{ marginRight: '8px' }} />
                  Ayarları Düzenle
                </button>
                <button onClick={() => handleAction('Dışa Aktar')}>
                  <Download size={14} style={{ marginRight: '8px' }} />
                  Dışa Aktar
                </button>
                <button onClick={() => handleAction('Paylaş')}>
                  <Share2 size={14} style={{ marginRight: '8px' }} />
                  Paylaş
                </button>
              </div>
            )}
          </div>
          <div className="view-icons">
            <button className="icon-btn" title="Görünüm" onClick={() => alert('Görünüm değiştirildi')}>
              <LayoutGrid size={18} />
            </button>
            <button className="icon-btn" title="Ayarlar" onClick={() => alert('Ayarlar açıldı')}>
              <Settings size={18} />
            </button>
            <button className="icon-btn" title="Tam Ekran" onClick={() => alert('Tam ekran moduna geçiliyor')}>
              <Maximize size={18} />
            </button>
          </div>
        </div>
      </div>

      <KPICards />

      <div className="dashboard-content">
        <div className="content-left">
          <VideoPlayer />
        </div>
        <div className="content-right">
          <EventReportsTable />
        </div>
      </div>
    </main>
  )
}
