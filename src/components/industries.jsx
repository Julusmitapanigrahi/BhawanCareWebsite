import React, { useState, useEffect } from 'react';
import AnimatedComponent from './animation';

export const Industries = () => {
    const images = [
      { id: 1, url: 'https://img.freepik.com/free-photo/climate-change-concept-collage_23-2149129761.jpg?size=626&ext=jpg&uid=R104029284&ga=GA1.1.993650411.1724500277&semt=ais_hybrid' },
      { id: 2, url: 'https://img.freepik.com/premium-photo/from-barren-land-lush-greenery-climate-recovery_932138-34819.jpg?size=626&ext=jpg&uid=R104029284&ga=GA1.1.993650411.1724500277&semt=ais_hybrid' },
      { id: 3, url: 'https://img.freepik.com/free-photo/view-wild-polar-bear_23-2150793137.jpg?size=626&ext=jpg&uid=R104029284&ga=GA1.1.993650411.1724500277&semt=ais_hybrid' },
      { id: 4, url: 'https://images.unsplash.com/photo-1717511140281-52586e5e307d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D' },
      { id: 5, url: 'https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D' },
      { id: 1, url: 'https://img.freepik.com/free-photo/climate-change-concept-collage_23-2149129761.jpg?size=626&ext=jpg&uid=R104029284&ga=GA1.1.993650411.1724500277&semt=ais_hybrid' },
      { id: 2, url: 'https://img.freepik.com/premium-photo/from-barren-land-lush-greenery-climate-recovery_932138-34819.jpg?size=626&ext=jpg&uid=R104029284&ga=GA1.1.993650411.1724500277&semt=ais_hybrid' },
      { id: 3, url: 'https://img.freepik.com/free-photo/view-wild-polar-bear_23-2150793137.jpg?size=626&ext=jpg&uid=R104029284&ga=GA1.1.993650411.1724500277&semt=ais_hybrid' },
      { id: 4, url: 'https://images.unsplash.com/photo-1717511140281-52586e5e307d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D' },
      { id: 5, url: 'https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D' },
    ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getClassForImage = (index) => {
    const diff = (index - currentIndex + images.length) % images.length;
    if (diff === 0) return 'active'; // Center image
    if (diff === 1) return 'next'; // Image on the right
    if (diff === images.length - 1) return 'prev'; // Image on the left
    return 'faded'; // All other images
  };

  return (
    <div className="sliding-section">
      <AnimatedComponent animationType="scaleUp" >
      <h2>Our Industry Affiliations</h2> 
      </AnimatedComponent>
      <div className="enhanced-carousel-container">
        <div className="enhanced-carousel">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`enhanced-carousel-item ${getClassForImage(index)}`}
            >
              <img src={image.url} alt={image.name} className="carousel-image" />
              <p className="image-caption">{image.name}</p>
            </div>
          ))}
        </div>

        <button className="carousel-arrow left-arrow" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-arrow right-arrow" onClick={nextSlide}>
          &#10095;
        </button>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
