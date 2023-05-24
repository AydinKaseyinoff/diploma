import React, { useState, useCallback, useEffect } from 'react';
import "./Slider.css"

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://static.tildacdn.com/tild6132-3766-4530-b330-396665616135/iPhone_14_Pro_7115a2.jpg',
    'https://the-geek.ru/wp-content/uploads/2022/08/d361d85ae28e196a0513163d6c9ef5b4b6b0fdfb8d8432fdfcb15750be8566ed.jpg',
    'https://cdn.wccftech.com/wp-content/uploads/2022/07/one-14-1.jpg',
    'https://images.macrumors.com/t/6ZAioIhw6uwqU-Z_ZHb3TvMHhtc=/1600x1200/smart/article-new/2022/01/iPhone-14-Mock-pill-and-hole-thumb.jpg', // Replace this URL with the URL of the next image
    // Add other image URLs as needed
  ];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    if (delta > 0) {
      // Scroll down, go to the next image or loop back to the first image
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (delta < 0) {
      // Scroll up, go to the previous image or loop back to the last image
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPreviousImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(goToNextImage, 39000); // Измените интервал времени по вашему выбору (в данном случае - 3 секунды)
    return () => {
      clearInterval(interval);
    };
  }, [goToNextImage]);

  return (
    <div className="Home" onWheel={handleScroll}>
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slider-image ${index === currentImageIndex ? 'active-in-home' : ''}`}
            src={image}
            alt="background"
          />
        ))}
        <button className="arrow prev" onClick={goToPreviousImage}>
          &lt;
        </button>
        <button className="arrow next" onClick={goToNextImage}>
          &gt;
        </button>
      </div>
      <div className="div-of-dots">
        {images.map((image, index) => (
          <button
            key={index}
            className={`dot ${index === currentImageIndex ? 'active-in-home' : ''}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
