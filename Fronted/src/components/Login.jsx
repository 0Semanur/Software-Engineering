import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Lock, LogIn, ShieldCheck, ArrowRight } from 'lucide-react'
import './Login.css'

export default function Login({ onLogin }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login
    setTimeout(() => {
      onLogin(email.split('@')[0]) // Pass the name (derived from email for now)
      navigate('/')
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="brand-section">
            <div className="login-logo">
              <ShieldCheck size={40} />
            </div>
            <h1>İSG Gözetim Sistemi</h1>
            <p>Yapay Zeka Destekli İş Sağlığı ve Güvenliği Analiz Platformu</p>
          </div>
          <div className="login-illustration">
            {/* Visual element or illustration */}
            <div className="pulse-circle"></div>
            <div className="floating-icons">
              <ShieldCheck className="float-1" size={24} />
              <LogIn className="float-2" size={24} />
            </div>
          </div>
        </div>
        
        <div className="login-right">
          <div className="login-box">
            <div className="login-header">
              <h2>Hoş Geldiniz</h2>
              <p>Lütfen hesabınıza giriş yapın</p>
            </div>
            
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>E-posta Adresi</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={20} />
                  <input 
                    type="email" 
                    placeholder="ornek@sirket.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="label-row">
                  <label>Şifre</label>
                  <a href="#" className="forgot-link">Şifremi Unuttum?</a>
                </div>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={20} />
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="form-options">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Beni Hatırla
                </label>
              </div>
              
              <button type="submit" className="login-btn" disabled={isLoading}>
                {isLoading ? (
                  <span className="loader"></span>
                ) : (
                  <>
                    Giriş Yap
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
            
            <div className="login-footer">
              <p>Hesabınız yok mu? <Link to="/register">Kayıt Olun</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}