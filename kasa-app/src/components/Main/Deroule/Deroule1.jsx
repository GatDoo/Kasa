import React, { useState } from 'react';

export default function Deroule1({title, description, className}) {

  const [isVisible, setIsVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
    setIsRotated(!isRotated);
  }

  return (
    <div className={`other-element ${isVisible ? 'moved' : ''}`}>
    <div className={`deroule ${className}`}>
        <div><h1>{title}</h1><button 
                className={isRotated ? 'rotated' : ''} 
                onClick={handleButtonClick}
            ><i className="fa-solid fa-arrow-down"></i></button></div>
        <p className={isVisible ? 'visible' : ''}>{description}</p>
    </div>
    </div>
  )
}
