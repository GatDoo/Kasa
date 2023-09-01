import React from 'react';

export default function Rating({ rating }) {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span key={index}>
            {rating >= index ? 
              <i className="fa-solid fa-star"></i> : 
              <i className="fa-solid fa-star star-empty"></i>}
          </span>
        );
      })}
    </div>
  );
}

