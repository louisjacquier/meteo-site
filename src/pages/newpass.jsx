import '../index.css'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'

function Newpass() {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const navigate = useNavigate()
  function confirmer() {
  alert("Votre mot de passe a bien été modifié")
  navigate('/login')
}

  return (
    <div className='Login'>
      <div className="logo">
        <Logo />
      </div>
      <h3>Nouveau mot de passe</h3>
      <br/>
      <h5>Entrez votre nouveau mot de passe</h5>
      <br/>
      <div className="password-field">
        <input type={visible1 ? 'text' : 'password'} placeholder="Nouveau mot de passe" />
        <span onClick={() => setVisible1(!visible1)}>
          {visible1 ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <br/>
      <h5>Confirmez votre nouveau mot de passe</h5>
      <br/>
      <div className="password-field">
        <input type={visible2 ? 'text' : 'password'} placeholder="Confirmer le mot de passe" />
        <span onClick={() => setVisible2(!visible2)}>
          {visible2 ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      <div className="login-buttons">
        <button onClick={confirmer}>Confirmer</button>
      </div>
    </div>
  )
}

export default Newpass