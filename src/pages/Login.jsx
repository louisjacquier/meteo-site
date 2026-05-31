import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Logo from '../components/Logo'

function Login() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [erreur, setErreur] = useState('')
  const navigate = useNavigate()

  async function handleLogin() {
    const response = await fetch('https://meteo-server-bz30.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await response.json()
    if (data.token) {
      localStorage.setItem('token', data.token)
      navigate('/meteo')
    } else {
      setErreur(data.message)
    }
  }

  return (
    <div className="Login">
      <div className="logo">
        <Logo />
      </div>
      <h1>Connexion</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="password-field">
        <input
          type={visible ? 'text' : 'password'}
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span onClick={() => setVisible(!visible)}>
          {visible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      {erreur && <p style={{color: 'red', fontSize: '13px', marginTop: '6px'}}>{erreur}</p>}
      <div className="login-buttons">
        <button onClick={handleLogin}>Se connecter</button>
        <button className="secondaire">Créer un compte</button>
      </div>
      <Link to="/forget">J'ai oublié mon mot de passe</Link>
    </div>
  )
}

export default Login