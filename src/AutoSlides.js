import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './assets/dogs-hotel.jpg';
import image2 from './assets/cat-hotel.jpg';
import image3 from './assets/puppy-hotel.jpg';
import image4 from './assets/kitten-hotel.jpg';
import image5 from './assets/mops.jpg';
import image6 from './assets/hotel-kitten.jpg'
import './App.css';

const AutoSlides = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      vertical: false,
    };
  
    return (
      <Slider {...settings}>
        <div>
          <img className='imag-hotel' src={image1} alt="Slide 1" />
        </div>
        <div>
          <img className='imag-hotel' src={image2} alt="Slide 2" />
        </div>
        <div>
          <img className='imag-hotel' src={image3} alt="Slide 3" />
        </div>
        <div>
          <img className='imag-hotel' src={image4} alt="Slide 4" />
        </div>
        <div>
          <img className='imag-hotel' src={image5} alt="Slide 5" />
        </div>
        <div>
          <img className='imag-hotel' src={image6} alt="Slide 6" />
        </div>
      </Slider>
    );
  };
  
  export default AutoSlides;