import '../index.css'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'

function Reset() {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  return (
    <div className='Login'>
      <div className="logo">
        <Logo />
      </div>
      <h3>Entrer le mot de passe reçut</h3>
      <br/>
      <div className="password-field">
        <input type={visible ? 'text' : 'password'} placeholder="Code" />
        <span onClick={() => setVisible(!visible)}>
          {visible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <div className="login-buttons">
        <button onClick={() => navigate('/newpass')}>Confirmer</button>

      </div>
      <Link to="/">Retour au login</Link>
    </div>
  )
}

export default Reset