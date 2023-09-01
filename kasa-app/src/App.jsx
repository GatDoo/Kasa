import './main.scss'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'

import Accueil from './Pages/Accueil';
import APropos from './Pages/APropos'
import Error from './Pages/Error'
import HousingDetail from './components/Main/Annonce/HousingDetail';
import data from './components/Main/Cards/Card/data.json'

function App() {

  const housings = data;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/housing/:id" element={<HousingDetail />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
}

export default App
