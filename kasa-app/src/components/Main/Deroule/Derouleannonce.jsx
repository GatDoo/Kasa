import React from 'react'
import Deroule1 from './Deroule1'
import data from './../Cards/Card/data.json'
import DerouleE from './DerouleE'

export default function Derouleannonce({ apartmentId }) {
    const apartment = data.find(item => item.id === apartmentId);
  
    if (!apartment) {
      return <div>Aucun appartement trouvé avec cet ID.</div>;
    }
  
    return (
      <div className='deroule-annonce'>
          <Deroule1
              className="deroule-annonce1"
              key ={apartment.id}
              title={'Description'}
              description={apartment.description}
          />
          <DerouleE
              className="deroule-annonce1"
              key ={apartment.id + apartment.rating}
              title={'Equipement'}
              description={apartment.equipments}
          />
      </div>
    )
  }
