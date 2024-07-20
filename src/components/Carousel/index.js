// src/components/Carousel.js
import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';

const Carousel = () => {
  return (
    <div className="carousel-container">
      <ResponsiveCarousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        <div className="carousel-item">
          <img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1721445331/Screenshot_2024-07-20_084410_iio4fx.png" alt="Feedback 1" />
          
        </div>
        <div className="carousel-item">
          <img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1721445325/Screenshot_2024-07-20_084336_h5z938.png" alt="Feedback 2" />
         
        </div>
        <div className="carousel-item">
          <img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1721445317/Screenshot_2024-07-20_084315_rdie6r.png" alt="Feedback 3" />
          
        </div>
      </ResponsiveCarousel>
    </div>
  );
};

export default Carousel;
