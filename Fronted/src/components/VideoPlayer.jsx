import { useState, useEffect } from 'react'
import { Play, Pause, Volume2, Settings, Maximize, SkipBack, SkipForward, Info } from 'lucide-react'
import './VideoPlayer.css'

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(195) // 03:15 in seconds
  const totalTime = 600 // 10:00 in seconds
  const [showInfo, setShowInfo] = useState(true)

  useEffect(() => {
    let interval
    if (isPlaying && currentTime < totalTime) {
      interval = setInterval(() => {
        setCurrentTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentTime])

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const progress = (currentTime / totalTime) * 100

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const newProgress = x / rect.width
    setCurrentTime(Math.floor(newProgress * totalTime))
  }

  return (
    <div className="video-section">
      <div className="video-container">
        {/* Video placeholder with overlay annotations */}
        <div className="video-frame">
          <div className="video-placeholder">
            <div className="construction-scene">
              {/* Restricted area - red polygon */}
              <div className="restricted-area">
                <span className="restricted-label">
                  Kısıtlı / Tehlikeli Alan
                </span>
              </div>

              {/* Compliance boxes - green */}
              <div className="detection-box compliant" style={{ top: '45%', right: '15%', width: '140px' }}>
                <span>Baret Var | Yelek Var</span>
              </div>
              <div className="detection-box compliant" style={{ top: '55%', right: '22%', width: '140px' }}>
                <span>Baret Var | Yelek Var</span>
              </div>
              <div className="detection-box compliant" style={{ top: '50%', right: '8%', width: '140px' }}>
                <span>Baret Var | Yelek Var</span>
              </div>

              {/* Violation boxes - red */}
              <div className="detection-box violation" style={{ top: '60%', left: '25%', width: '180px' }}>
                <span>Kask Yok | Yelek Yok</span>
              </div>
              <div className="detection-box violation" style={{ top: '55%', left: '38%', width: '220px' }}>
                <span>Kask Yok | Yelek Var | Kısıtlı Alan ihlali</span>
              </div>

              {/* Vest violation - yellow */}
              <div className="detection-box warning" style={{ top: '35%', left: '45%', width: '160px' }}>
                <span>Yelek İhlali (Yelek Yok)</span>
              </div>
            </div>
          </div>

          {/* Video overlay info */}
          {showInfo && (
            <div className="video-overlay-info">
              <span><Info size={12} style={{ marginRight: '4px' }} /> Frame: 11.26</span>
              <span>Rate: 0.57 ms</span>
              <span>Analiz time: 0.01ms</span>
            </div>
          )}
        </div>

        {/* Video controls */}
        <div className="video-controls">
          <button className="control-btn" onClick={() => setCurrentTime(Math.max(0, currentTime - 10))}>
            <SkipBack size={18} />
          </button>
          <button
            className="play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" />}
          </button>
          <button className="control-btn" onClick={() => setCurrentTime(Math.min(totalTime, currentTime + 10))}>
            <SkipForward size={18} />
          </button>
          <span className="time-display">
            {formatTime(currentTime)} / {formatTime(totalTime)}
          </span>
          <div className="progress-bar" onClick={handleSeek}>
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <button className="control-btn" onClick={() => alert('Ses seviyesi değiştirildi')}>
            <Volume2 size={18} />
          </button>
          <button className="control-btn" onClick={() => setShowInfo(!showInfo)}>
            <Info size={18} />
          </button>
          <button className="control-btn" onClick={() => alert('Tam ekran moduna geçiliyor')}>
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
