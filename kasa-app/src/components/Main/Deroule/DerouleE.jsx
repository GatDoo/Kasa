import React, { useState } from 'react';

function DerouleE({ title, description, className }) {

  const [isVisible, setIsVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
    setIsRotated(!isRotated);
  }

  return (
    <div className={`other-element ${isVisible ? 'moved' : ''}`}>
      <div className={`deroule ${className}`}>
        <div>
          <h1>{title}</h1>
          <button 
            className={isRotated ? 'rotated' : ''} 
            onClick={handleButtonClick}
          >
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
        {Array.isArray(description) ? (
          <ul className={isVisible ? 'visible' : ''}>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className={isVisible ? 'visible' : ''}>{description}</p>
        )}
      </div>
    </div>
  );
}

export default DerouleE;
