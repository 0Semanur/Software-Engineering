import { CheckCircle, HardHat, AlertTriangle, TrendingUp, Info } from 'lucide-react'
import './KPICards.css'

const cards = [
  {
    title: 'Toplam Analiz Tespiti',
    value: '1250',
    icon: CheckCircle,
    color: 'green',
    trend: '+12%',
  },
  {
    title: 'Toplam Baret İhlali',
    value: '85',
    icon: HardHat,
    color: 'red',
    trend: '+5%',
  },
  {
    title: 'Toplam Yelek İhlali',
    value: '60',
    icon: AlertTriangle,
    color: 'red',
    trend: '-2%',
  },
  {
    title: 'Genel Uyum Oranı',
    value: '88%',
    icon: TrendingUp,
    color: 'green',
    trend: '+3%',
  },
]

export default function KPICards() {
  const handleCardClick = (title) => {
    alert(`${title} detayları görüntüleniyor...`)
  }

  return (
    <div className="kpi-cards">
      {cards.map(({ title, value, icon: Icon, color, trend }) => (
        <div 
          key={title} 
          className={`kpi-card kpi-${color}`}
          onClick={() => handleCardClick(title)}
        >
          <div className="kpi-content">
            <span className="kpi-title">{title}</span>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span className="kpi-value">{value}</span>
              <span style={{ 
                fontSize: '0.75rem', 
                fontWeight: '700', 
                color: trend.startsWith('+') ? 'var(--success)' : 'var(--danger)',
                background: trend.startsWith('+') ? 'var(--success-bg)' : 'var(--danger-bg)',
                padding: '2px 6px',
                borderRadius: '6px'
              }}>
                {trend}
              </span>
            </div>
          </div>
          <div className={`kpi-icon kpi-icon-${color}`}>
            <Icon size={28} />
          </div>
        </div>
      ))}
    </div>
  )
}
