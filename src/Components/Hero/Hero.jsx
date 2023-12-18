import React from 'react';
import "./hero.css"
import heroBG from "../../Assets/images/catering_hero_image.jpg"

const Hero = () => {
  return (
    <div className='hero-main-container'>
      <div className="hero-image-container">
        <img src={heroBG} alt="" />
      </div>
      <div className="hero-text-container">
        <p>jai shree ram</p>
        <h1>cns events</h1>
        <h4>A true event managemant</h4>
      </div>
    </div>
  );
}

export default Hero;
