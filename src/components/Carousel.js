"use client";
import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="relative w-full max-h-[500px] mx-auto overflow-hidden">
      <div className="flex transition-transform duration-700 ease-in-out" 
      style={{transform: `translateX(-${currentIndex * 100}%)`,}}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full">
            <img src={image} alt={`Slide ${index}`} className="w-full" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === idx ? 'bg-[#BDDD01]' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
