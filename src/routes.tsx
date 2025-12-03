import { Routes, Route } from 'react-router-dom'

import StorePage from './pages/StorePage'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<StorePage />} />
  </Routes>
)

export default Rotas
