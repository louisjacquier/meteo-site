import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Meteo from './pages/Meteo'
import Admin from './pages/Admin'
import Forget from './pages/forget'
import Reset from './pages/reset'
import Newpass from './pages/newpass'
import Relogin from './pages/relogin'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/meteo" element={<Meteo />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/forget" element={<Forget />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/newpass" element={<Newpass />} />
        <Route path="/relogin" element={<Relogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App