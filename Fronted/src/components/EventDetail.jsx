import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, MapPin, Tag, ShieldAlert, CheckCircle2, AlertTriangle, FileText, Info, Camera, Play, Download, Share2 } from 'lucide-react'
import './EventDetail.css'

// Mock data for detail
const eventDetails = {
  1: {
    id: 1,
    date: '2023-11-20 03:25:47',
    type: 'Kısıtlı Alan & Baret Yok',
    location: 'Kamera 01',
    status: 'Raporlandı',
    statusType: 'reported',
    summary: 'Bu olay, Kamera 01 tarafından tespit edilmiştir. Personel, kısıtlı bir alana yetkisiz giriş yapmış ve aynı zamanda baret takmadığı gözlemlenmiştir.',
    cause: 'Alan sınırlarının net bir şekilde işaretlenmemesi ve personelin güvenlik prosedürlerini ihlal etmesi.',
    violatedRules: [
      'Kural 12: Kısıtlı alanlara yetkisiz giriş yapılamaz.',
      'Kural 05: Şantiye sahasında baret kullanımı zorunludur.'
    ],
    recommendations: [
      'Alan sınırlarına fiziksel engeller (bariyerler) eklenmeli.',
      'Personel için İSG eğitimleri tekrarlanmalı.',
      'Kısıtlı alan uyarı tabelaları daha görünür hale getirilmeli.'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000&auto=format&fit=crop'
  },
  // Other IDs can follow...
}

export default function EventDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const event = eventDetails[id] || eventDetails[1] // Default to 1 if not found for mock

  return (
    <main className="main-content event-detail-page">
      <div className="detail-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <ArrowLeft size={20} />
          Geri Dön
        </button>
        <div className="header-actions">
          <button className="action-btn outline">
            <Download size={18} />
            PDF İndir
          </button>
          <button className="action-btn outline">
            <Share2 size={18} />
            Paylaş
          </button>
          <button className="action-btn primary">
            Raporu Onayla
          </button>
        </div>
      </div>

      <div className="detail-grid">
        {/* Left Column: Visuals */}
        <div className="detail-visuals">
          <div className="visual-card">
            <div className="card-header">
              <h3><Camera size={18} /> Olay Görüntüsü</h3>
              <span className="timestamp">{event.date}</span>
            </div>
            <div className="image-container">
              <img src={event.image} alt="Olay Görüntüsü" />
              <div className="detection-overlay">
                <div className="overlay-box violation" style={{ top: '30%', left: '40%', width: '120px', height: '180px' }}>
                  <span className="label">İhlal Tespit Edildi</span>
                </div>
              </div>
            </div>
            <div className="video-preview-action">
              <button className="play-preview-btn">
                <Play size={16} fill="white" />
                Olay Anını İzle (10s)
              </button>
            </div>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <label><Calendar size={14} /> Tarih</label>
              <p>{event.date}</p>
            </div>
            <div className="info-item">
              <label><MapPin size={14} /> Konum</label>
              <p>{event.location}</p>
            </div>
            <div className="info-item">
              <label><Tag size={14} /> Olay Türü</label>
              <p>{event.type}</p>
            </div>
            <div className="info-item">
              <label><ShieldAlert size={14} /> Durum</label>
              <p><span className={`status-badge ${event.statusType}`}>{event.status}</span></p>
            </div>
          </div>
        </div>

        {/* Right Column: Analysis */}
        <div className="detail-analysis">
          <section className="analysis-section">
            <h3><FileText size={20} className="section-icon" /> Olay Özeti</h3>
            <p className="summary-text">{event.summary}</p>
          </section>

          <section className="analysis-section">
            <h3><AlertTriangle size={20} className="section-icon warning" /> Kök Neden Analizi</h3>
            <p className="cause-text">{event.cause}</p>
          </section>

          <section className="analysis-section">
            <h3><ShieldAlert size={20} className="section-icon danger" /> İhlal Edilen Kurallar</h3>
            <ul className="rules-list">
              {event.violatedRules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </section>

          <section className="analysis-section">
            <h3><CheckCircle2 size={20} className="section-icon success" /> Çözüm ve Öneriler</h3>
            <div className="recommendations-list">
              {event.recommendations.map((rec, idx) => (
                <div key={idx} className="recommendation-item">
                  <span className="item-number">{idx + 1}</span>
                  <p>{rec}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}