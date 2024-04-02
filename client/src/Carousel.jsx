import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import "slick-carousel/slick/slick.css";

const images = [
    { src: './src/assets/car1.jpg'},
    { src: './src/assets/car2.png'},
    { src: './src/assets/car3.jpg'},
    { src: './src/assets/car4.jpg'},
    { src: './src/assets/car5.jpg'},
    { src: './src/assets/car6.jpg'},
    { src: './src/assets/car7.jpg'},
    { src: './src/assets/car8.jpg'},
    { src: './src/assets/car9.jpg'}

    // Add more images as needed
  ];

  const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change interval (in milliseconds) based on desired speed
  
      return () => clearInterval(intervalId);
    }, [images.length]);
  
    const settings = {
      dots: false, // Enable navigation dots
      infinite: true, // Enable continuous looping
      speed: 500, // Transition speed (in milliseconds)
      slidesToShow: 3, // Number of images to display at once
      slidesToScroll: 1, // Number of images to scroll on user interaction
      autoplay: true, // Enable automatic slide change
      autoplaySpeed: 3000, // Interval for automatic slide change (in milliseconds)
      beforeChange: (current, next) => setCurrentIndex(next),
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Slider>
  
        {/* Optional: Display current index */}
        {/* <p>Current Image: {currentIndex + 1} / {images.length}</p> */}
      </div>
    );
  };
  
  export default Carousel;
  