import React, { useState } from "react";

const Carousel = ({ items, renderItem, variant, size, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  if (!items || items.length === 0) return null;

  return (
    <div className={`carousel-container ${size} ${variant} ${className}`}>
      <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
      
      <div className="carousel-content">
        {renderItem(items[currentIndex], currentIndex)}
      </div>

      <button className="carousel-btn next" onClick={nextSlide}>›</button>
      
      <div className="carousel-dots">
        {items.map((_, i) => (
          <span 
            key={i} 
            className={`dot ${i === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;