import React from 'react'
import Deroule1 from './Deroule1'

const derouleTitle = [
    {
        title: 'Fiabilité',
        description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
        id: 'D1'
},
{
    title: 'Respect',
    description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    id: 'D2'
},
{
    title: 'Service',
    description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    id: 'D3'
},
{
    title: 'Sécurité',
    description: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
    id: 'D4'
}
]

export default function Deroule() {
  return (
    <div className='deroule1'>
        {derouleTitle.map(item => (
            <Deroule1
                key ={item.id}
                title={item.title}
                description={item.description}
            />
        ))}
    </div>
  )
}
