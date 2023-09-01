import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/LOGO.png'

export default function Header() {
  return (
    <header key={'header1'}>
        <img src={Logo} alt="" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/a-propos">A Propos</Link>
        </nav>
    </header>
  )
}

