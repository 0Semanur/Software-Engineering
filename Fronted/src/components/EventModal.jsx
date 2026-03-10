import { X, Calendar, MapPin, Tag, Info, ArrowRight } from 'lucide-react'
import './EventModal.css'

export default function EventModal({ event, onClose, onDetailClick }) {
  if (!event) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Olay Özeti</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="modal-body">
          <div className="summary-card">
            <div className="summary-item">
              <Tag size={18} className="item-icon" />
              <div>
                <label>Olay Türü</label>
                <p>{event.type}</p>
              </div>
            </div>
            <div className="summary-item">
              <Calendar size={18} className="item-icon" />
              <div>
                <label>Tarih/Saat</label>
                <p>{event.date}</p>
              </div>
            </div>
            <div className="summary-item">
              <MapPin size={18} className="item-icon" />
              <div>
                <label>Konum</label>
                <p>{event.location}</p>
              </div>
            </div>
            <div className="summary-item">
              <Info size={18} className="item-icon" />
              <div>
                <label>Durum</label>
                <p>
                  <span className={`status-badge ${event.statusType}`}>
                    {event.status}
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="short-description">
            <h3>Kısa Özet</h3>
            <p>
              Bu olay, {event.location} bölgesinde {event.date} tarihinde tespit edilmiştir. 
              Görüntü işleme algoritması "{event.type}" ihlalini belirlemiştir. 
              Sistem bu ihlali "{event.status}" olarak sınıflandırmıştır.
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <button className="secondary-btn" onClick={onClose}>Kapat</button>
          <button className="primary-btn" onClick={() => onDetailClick(event.id)}>
            Detaylı Raporu Gör
            <ArrowRight size={16} style={{ marginLeft: '8px' }} />
          </button>
        </div>
      </div>
    </div>
  )
}