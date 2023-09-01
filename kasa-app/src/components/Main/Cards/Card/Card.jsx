import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({ id, title, cover, description}) {
    return (
        
            <Link to={`/housing/${id}`} className='card'>
            <div></div>
            <img src={cover} alt={title} />
            <span><p>{title}</p></span>
            </Link>
    )
}

