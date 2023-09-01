import React from 'react';
import data from './Card/data.json';
import Card from './Card/Card';

export default function CardList() {
    return (
        <div className='cards-flex'>
            {data.map(item => (
                <Card 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    cover={item.cover}
                    description={item.description}
                    host={item.host}
                />
            ))}
        </div>
    )
}

