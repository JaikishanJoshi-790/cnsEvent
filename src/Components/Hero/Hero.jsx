import React from 'react';
import "./hero.css"
import heroBG from "../../Assets/images/catering_hero_image.jpg"
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero-main-container'>
      {/* Background Image */}
      <div className="hero-image-container">
        <img src={heroBG} alt="CNS Events Hero Background" />
      </div>
      
      {/* Particle Effects */}
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="hero-floating-elements">
        <div className="floating-element">✨</div>
        <div className="floating-element">🎉</div>
        <div className="floating-element">🌟</div>
      </div>
      
      {/* Main Content */}
      <div className="hero-text-container">
        <p className="gradient-text">Jai Shree Ram</p>
        <h1>CNS Events</h1>
        <h4>Creating Unforgettable Moments, One Event at a Time</h4>
        
        <div className="hero-cta">
          <Link to="Services" smooth={true} duration={1000}>
            <button className="btn">Explore Services</button>
          </Link>
          <Link to="Contact" smooth={true} duration={1000}>
            <button className="btn btn-outline">Get Quote</button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </div>
  );
}

export default Hero;
