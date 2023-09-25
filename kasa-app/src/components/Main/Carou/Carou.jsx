import React, { useState } from 'react'

export default function Carou({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };



  return (
    <div className='carou'>
      <button className='carou-left' onClick={goToPrevSlide}>←</button>
      <img src={pictures[currentSlide]} alt={`Slide ${currentSlide}`} />
      <button className='carou-right' onClick={goToNextSlide}>→</button>
      <p className='slide-count'>{currentSlide + 1} / {pictures.length}</p>
    </div>
  )
}

