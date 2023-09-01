import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Cards/Card/data.json'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Carou from '../Carou/Carou';
import Derouleannonce from '../Deroule/Derouleannonce';
import TagPost from '../Tag/TagPost';
import Profile from '../Profile/Profile';
import Rating from '../Stars/Stars';
import {Navigate} from 'react-router-dom'

const HousingDetail = () => {
  const { id } = useParams();

  const housings = data;

  const housing = housings.find(h => h.id === id);
  if (!housing) {
    return <Navigate to="/404" replace />;
  }


  return (
    <div>
        <Header />
        <article className='housing-detail'>
            <Carou pictures={housing.pictures} />
            <div className='h1-host'><h1>{housing.title}</h1><Profile host={housing.host.name} himage={housing.host.picture} /></div>
            <p className='housing-p'>{housing.location}</p>
            <div className='tag-rating'><TagPost tags={housing.tags} /><Rating rating={parseInt(housing.rating, 10)} /></div>
            <Derouleannonce apartmentId={id} />
        </article>
        <Footer />
    </div>
  );
};

export default HousingDetail;
