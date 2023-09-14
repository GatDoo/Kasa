import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Main/Banner/Banner';
import Deroule from '../components/Main/Deroule/Deroule';
import bannerLogo from '../images/banner2.png';

function APropos() {
  return <div>
    <Header />
    <Banner 
      bannerLogo = {bannerLogo}
      h1Value = "Chez vous, partout et ailleurs"
    />;
    <Deroule />
    <Footer />
    </div>;
}

export default APropos;