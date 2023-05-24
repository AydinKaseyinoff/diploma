import React, { useState, useCallback, useEffect } from 'react';
import "./Slider.css"

export default function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://pbs.twimg.com/media/FJEsEp1XwAAClGD?format=jpg&name=large',
    'https://thumbs.dreamstime.com/b/векторный-баннер-для-iphone-винницкая-украина-ноября-иллюстрация-вектора-229970813.jpg',
    'https://i.pinimg.com/originals/f8/c9/42/f8c9422d6dbf4f4010056359889cec9b.png',
    'https://www.smartone.com/service-site/iPhone11/img/english/buy_now/index_1400x700.jpg',
    'https://assets.materialup.com/uploads/c73cc104-4552-457e-9b7c-e05518ecc5b9/preview.jpg',
    'https://on-desktop.com/wps/_New_Blue_Iphone_5C_046066_.jpg',
    'https://myotakuworld.com/wp-content/uploads/2022/05/apple-iphone-x-sims-mod-1536x864.webp',
    'https://letstalk-tech.s3.amazonaws.com/wp-content/uploads/2015/11/iPhone-6-cases-roundup-banner.jpg',
    'https://i.pinimg.com/originals/2f/5a/96/2f5a962c8e213fde7c0698fd99082f14.jpg', // Replace this URL with the URL of the next image
    // Add other image URLs as needed
  ];

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPreviousImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3500); // Измените интервал времени по вашему выбору (в данном случае - 3 секунды)
    return () => {
      clearInterval(interval);
    };
  }, [goToNextImage]);

  return (
    <div className="slider">
      <div className="slider-container" onWheel={(event) => event.preventDefault()}>
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
