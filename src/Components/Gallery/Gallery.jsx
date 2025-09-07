import React, { useState } from 'react';
import { SliderData } from './SliderData';
import './gallery.css'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
const Gallery = () => {

  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <Helmet>
        <title>Gallery | CNS Event</title>
        <meta 
          name="description" 
          content="Explore the gallery of CNS Event - Catering, Decoration, Stage, Lighting, Sound & Dance Floor arrangements for weddings and events." 
        />
        <meta name="keywords" content="CNS Event Gallery, Wedding Gallery, Catering Photos, Decoration Photos, Rajasthan Events" />
      </Helmet>
      <h1>Gallery <hr /></h1>
      <FaArrowCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='wedding' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Gallery;
