import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Cards/Card/data.json'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Carou from '../Carou/Carou';
import Derouleannonce from '../Deroule/Derouleannonce';
import TagPost from '../Tag/TagPost';

const HousingDetail = () => {
  const { id } = useParams();

  const housings = data;

  const housing = housings.find(h => h.id === id);
  if(!housing) {
    return <div>Logement non trouvé</div>;
}


  return (
    <div>
        <Header />
        <article className='housing-detail'>
            <Carou pictures={housing.pictures} />
            <h1>{housing.title}</h1>
            <p className='housing-p'>{housing.location}</p>
            <TagPost tags={housing.tags} />
            <Derouleannonce apartmentId={id} />
        </article>
        <Footer />
    </div>
  );
};

export default HousingDetail;
