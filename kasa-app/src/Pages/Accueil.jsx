import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Main/Banner/Banner';
import Cards from '../components/Main/Cards/Cards';
import Footer from '../components/Footer/Footer';
import '../main.scss'

function Accueil() {
  return (
  <div>
    <Header />
    <Banner />;
    <Cards />
    <Footer />
  </div>
)}

export default Accueil;