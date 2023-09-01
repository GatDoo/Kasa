import React from 'react'
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

export default function HousingCreate({ housings }) {
  return (
    <div>
        <Header />
        {housings.map(housing => (
            <div key={housing.id}>
                <h2>{housing.title}</h2>
                <Link to={`/housing/${housing.id}`}>Voir les détails</Link>
            </div>
        ))}
        <Footer />
    </div>
  )
}
