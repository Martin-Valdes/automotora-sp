import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Carrusel.scss'

const Carrusel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    className: "slider variable-width",
    autoplay: true, // Activar la reproducción automática
    autoplaySpeed: 1,
    pauseOnHover: false,
    variableWidth: true
  };

  return (
    
      <>
      <Slider {...settings}>
          <div className="imgCarrusel" style={{ width: 100 }}>
          <img src="/img/vw.jpg" alt="" />
          </div>
          <div className="imgCarrusel">
          <img src="/img/peugeot.jpg" alt="" />
          </div>
          <div className="imgCarrusel">
          <img src="/img/mini.jpg" alt="" />
          </div>
          <div className="imgCarrusel">
          <img src="/img/hiunday.jpg" alt="" />
          </div>
          <div className="imgCarrusel">
          <img src="/img/volvo.jpg" alt="" />
          </div>
          <div className="imgCarrusel">
          <img src="/img/suzuki.jpg" alt="" />
          </div>
          <div className="imgCarrusel">
          <img src="/img/kia.jpg" alt="" />
          </div>
          <div className="imgCarrusel">
            <img src="/img/citroen.jpg" alt="" />
          </div>
          <div className="imgCarrusel">
            <img src="/img/toyota.jpg" alt="" />
          </div>
          <div className="imgCarrusel">
            <img src="/img/audi.jpg" alt="" />
          </div>
      </Slider>
      </>
  );
};

export default Carrusel;
