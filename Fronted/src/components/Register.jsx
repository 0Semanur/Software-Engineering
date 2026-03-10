import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Lock, User, UserPlus, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react'
import './Register.css'

export default function Register({ onRegister }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Şifreler eşleşmiyor!')
      return
    }
    
    setIsLoading(true)
    // Simulate registration
    setTimeout(() => {
      onRegister(formData.name) // Pass the name
      navigate('/')
      setIsLoading(false)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-left">
          <div className="brand-section">
            <Link to="/login" className="back-link">
              <ArrowLeft size={18} />
              Giriş Ekranına Dön
            </Link>
            <div className="register-logo">
              <UserPlus size={40} />
            </div>
            <h1>Yeni Hesap Oluştur</h1>
            <p>Güvenli ve akıllı İSG yönetimine hemen başlayın.</p>
          </div>
          <div className="register-features">
            <div className="feature-item">
              <div className="feature-icon"><ShieldCheck size={20} /></div>
              <div>
                <h4>Gelişmiş Güvenlik</h4>
                <p>Verileriniz uçtan uca şifrelenir.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="register-right">
          <div className="register-box">
            <div className="register-header">
              <h2>Kayıt Ol</h2>
              <p>Bilgilerinizi girerek üyeliğinizi tamamlayın</p>
            </div>
            
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Ad Soyad</label>
                <div className="input-wrapper">
                  <User className="input-icon" size={20} />
                  <input 
                    name="name"
                    type="text" 
                    placeholder="Ad Soyad" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>E-posta Adresi</label>
                <div className="input-wrapper">
                  <Mail className="input-icon" size={20} />
                  <input 
                    name="email"
                    type="email" 
                    placeholder="ornek@sirket.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Şifre</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={20} />
                  <input 
                    name="password"
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Şifre Tekrar</label>
                <div className="input-wrapper">
                  <Lock className="input-icon" size={20} />
                  <input 
                    name="confirmPassword"
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <button type="submit" className="register-btn" disabled={isLoading}>
                {isLoading ? (
                  <span className="loader"></span>
                ) : (
                  <>
                    Hesap Oluştur
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
            
            <div className="register-footer">
              <p>Zaten hesabınız var mı? <Link to="/login">Giriş Yapın</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}