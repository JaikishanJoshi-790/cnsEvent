import React from 'react';
import "./hero.css"
import heroBG from "../../Assets/images/catering_hero_image.jpg"
import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
  return (
    <div className='hero-main-container'>
       <Helmet>
        <title>CNS Event - Best Event Management Company</title>
        <meta name="description" content="CNS Event provides wedding, birthday, and corporate event management services with premium decoration and planning." />
        <meta name="keywords" content="Event planner, Wedding planner, Birthday party decoration, Corporate events" />
      </Helmet>
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
        <p className="gradient-text">WELCOME TO</p>
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
