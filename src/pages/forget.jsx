import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Logo from '../components/Logo'

function Forget() {
    const [email, setEmail] = useState('')
const navigate = useNavigate()
  return (
    <div className='Login'>
            <div className="logo">
        <Logo />
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