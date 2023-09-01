import React from 'react';
import Header from '../components/Header/Header';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import Footer from '../components/Footer/Footer';

function Error() {
  return <div>
    <Header />
    <div className='error'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link className='accueil-error' to="/">Retourner sur la page d'accueil</Link>
    </div>
    <Footer />
</div>
}

export default Error;