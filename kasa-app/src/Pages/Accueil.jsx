import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Main/Banner/Banner';
import Cards from '../components/Main/Cards/Cards';
import Footer from '../components/Footer/Footer';
import '../main.scss'
import bannerLogo from '../images/IMG.png'

function Accueil() {
  return (
  <div>
    <Header />
    <Banner 
      bannerLogo = {bannerLogo}
      h1Value = "Chez vous, partout et ailleurs"
    />;
    <Cards />
    <Footer />
  </div>
)}

export default Accueil;