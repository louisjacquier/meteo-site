import '../index.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Logo from '../components/Logo'

function Login() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="Login">
        <div className="logo">
        <Logo />
      </div>
      <h1>Reconnexion</h1>
      <input type="email" placeholder="Email" />
      <div className="password-field">
        <input type={visible ? 'text' : 'password'} placeholder="Mot de passe" />
        <span onClick={() => setVisible(!visible)}>
          {visible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <div className="login-buttons">
        <button>Se connecter</button>
        <button className="secondaire">Créer un compte</button>
      </div>
      <Link to="/forget">J'ai oublié mon mot de passe</Link>
    </div>
  )
}

export default Login