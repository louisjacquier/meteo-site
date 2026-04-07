import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Forget() {
    const [email, setEmail] = useState('')
const navigate = useNavigate()
  return (
    <div className='Login'>
            <div className="logo">
        <svg width="160" height="50" viewBox="0 0 160 50" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="25" r="10" fill="#0078d4" opacity="0.15"/>
          <circle cx="30" cy="25" r="6" fill="#0078d4"/>
          <line x1="30" y1="13" x2="30" y2="10" stroke="#0078d4" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="30" y1="37" x2="30" y2="40" stroke="#0078d4" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="18" y1="25" x2="15" y2="25" stroke="#0078d4" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="42" y1="25" x2="45" y2="25" stroke="#0078d4" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="21" y1="16" x2="19" y2="14" stroke="#0078d4" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="39" y1="34" x2="41" y2="36" stroke="#0078d4" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="39" y1="16" x2="41" y2="14" stroke="#0078d4" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="21" y1="34" x2="19" y2="36" stroke="#0078d4" stroke-width="1.5" stroke-linecap="round"/>
          <rect x="27" y="26" width="22" height="13" rx="6.5" fill="white" stroke="#e5e7eb" stroke-width="1"/>
          <circle cx="33" cy="30" r="6" fill="white" stroke="#e5e7eb" stroke-width="1"/>
          <circle cx="43" cy="28" r="7" fill="white" stroke="#e5e7eb" stroke-width="1"/>
          <text x="55" y="30" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="600" fill="#1a1a1a">Weather</text>
          <text x="55" y="46" font-family="'Segoe UI', sans-serif" font-size="14" font-weight="300" fill="#0078d4">Now</text>
        </svg>
      </div>
      <h3>J'ai oublié mon mot de passe</h3>
      <br/>
      <h5>Entrez votre email pour réinitialiser votre mot de passe</h5>
      <br/>
      <input 
  type="email" 
  placeholder='Email'
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
       <button onClick={() => navigate('/reset')}>Suivant</button>
     <Link to="/">Retour au login</Link>
    </div>
  )
}

export default Forget