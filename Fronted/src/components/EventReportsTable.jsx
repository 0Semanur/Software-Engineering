import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Filter, ChevronLeft, ChevronRight, Eye, ArrowUpDown, Calendar, Info } from 'lucide-react'
import EventModal from './EventModal'
import './EventReportsTable.css'

const initialEvents = [
  {
    id: 1,
    date: '2023-11-20 03:25:47',
    type: 'Kısıtlı Alan & Baret Yok',
    location: 'Kamera 01',
    frame: '11.26',
    status: 'Raporlandı',
    statusType: 'reported',
  },
  {
    id: 2,
    date: '2023-11-20 03:18:54',
    type: 'Yelek Takılmadı',
    location: 'Kamera 01',
    frame: '11.26',
    status: 'İncelendi',
    statusType: 'reviewed',
  },
  {
    id: 3,
    date: '2023-11-27 02:10:36',
    type: 'Yelek Takılmadı',
    location: 'Kamera 01',
    frame: '11.26',
    status: 'Yanlış Pozitif',
    statusType: 'false-positive',
  },
  {
    id: 4,
    date: '2023-11-27 02:13:38',
    type: 'Baret Takılmadı',
    location: 'Kamera 01',
    frame: '11.26',
    status: 'Doğrulandı',
    statusType: 'verified',
  },
  {
    id: 5,
    date: '2023-11-27 02:13:57',
    type: 'Baret Takılmadı',
    location: 'Kamera 01',
    frame: '11.26',
    status: 'İncelendi',
    statusType: 'reviewed',
  },
  {
    id: 6,
    date: '2023-11-27 02:22:53',
    type: 'Kompozit İhlal (Baret & Yelek Yok)',
    location: 'Kamera 01',
    frame: '11.26',
    status: 'Doğrulandı',
    statusType: 'verified',
  },
]

export default function EventReportsTable() {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' })
  const [filterType, setFilterType] = useState('All')
  const [selectedEvent, setSelectedEvent] = useState(null)

  // Sorting and Filtering Logic
  const sortedAndFilteredEvents = useMemo(() => {
    let items = [...initialEvents]

    // Filtering
    if (filterType !== 'All') {
      items = items.filter(item => item.status === filterType || item.type.includes(filterType))
    }

    // Sorting
    items.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1
      }
      return 0
    })

    return items
  }, [sortConfig, filterType])

  const requestSort = (key) => {
    let direction = 'asc'
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key, direction })
  }

  const handleRowClick = (event) => {
    setSelectedEvent(event)
  }

  const navigateToDetail = (id) => {
    setSelectedEvent(null)
    navigate(`/olay/${id}`)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="event-reports">
      <div className="reports-header">
        <div>
          <h3>Video Analiz Olay Raporları</h3>
          <p className="reports-count">{sortedAndFilteredEvents.length} olay bulundu</p>
        </div>
        <div className="reports-actions">
          <select 
            className="filter-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">Tüm Olaylar</option>
            <option value="Baret">Baret İhlalleri</option>
            <option value="Yelek">Yelek İhlalleri</option>
            <option value="Doğrulandı">Doğrulandı</option>
            <option value="Raporlandı">Raporlandı</option>
          </select>
          <button className="instant-report-btn" onClick={() => alert('Anlık rapor oluşturuldu')}>
            Anlık Rapor
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="events-table">
          <thead>
            <tr>
              <th onClick={() => requestSort('id')} style={{ cursor: 'pointer' }}>
                ID <ArrowUpDown size={12} />
              </th>
              <th onClick={() => requestSort('date')} style={{ cursor: 'pointer' }}>
                Tarih/Saat <ArrowUpDown size={12} />
              </th>
              <th>Olay Türü</th>
              <th>Konum</th>
              <th>Durum</th>
              <th>İşlem</th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredEvents.map((event) => (
              <tr key={event.id} onClick={() => handleRowClick(event)}>
                <td className="id-cell">#{event.id.toString().padStart(4, '0')}</td>
                <td>{event.date}</td>
                <td>
                  <div className="type-cell">
                    <span className="type-text">{event.type}</span>
                  </div>
                </td>
                <td>{event.location}</td>
                <td>
                  <span className={`status-badge ${event.statusType}`}>
                    {event.status}
                  </span>
                </td>
                <td>
                  <button 
                    className="view-detail-btn" 
                    onClick={(e) => {
                      e.stopPropagation()
                      navigateToDetail(event.id)
                    }}
                  >
                    Detay <Eye size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button 
          className="page-btn" 
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ChevronLeft size={18} />
        </button>
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn"><ChevronRight size={18} /></button>
      </div>

      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)}
          onDetailClick={navigateToDetail}
        />
      )}
    </div>
  )
}
