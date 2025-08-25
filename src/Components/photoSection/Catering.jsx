import React from 'react';
import './catering.css';
import { FaArrowLeft, FaHome, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Catering = ({ title, data }) => {
  return (
    <div className="catering-page">
      {/* Floating Close Button */}
      <Link to="/" className="floating-close-btn" title="Close and return to home">
        <FaTimes />
      </Link>
      
      {/* Header */}
      <div className="catering-header">
        <div className="header-content">
          <div className="back-navigation">
            <Link to="/#Services" className="back-btn">
              <FaArrowLeft />
              <span>Back to Services</span>
            </Link>
            <Link to="/" className="home-btn">
              <FaHome />
              <span>Home</span>
            </Link>
          </div>
          <h1>{title}</h1>
          <p>Explore our professional {title.toLowerCase()} services and gallery</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="catering-gallery">
        <div className="gallery-container">
          {data.map((item, index) => (
            <div key={index} className="gallery-item">
              <img src={item.original} alt={`${title} ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Service Description */}
      <div className="service-description">
        <div className="description-container">
          <h2>About Our {title}</h2>
          <p>
            We specialize in providing exceptional {title.toLowerCase()} services for all types of events. 
            Our team of experienced professionals ensures that every detail is perfect, from setup to execution.
          </p>
          <div className="service-features">
            <h3>What We Offer:</h3>
            <ul>
              <li>Professional setup and arrangement</li>
              <li>Quality materials and equipment</li>
              <li>Experienced staff and technicians</li>
              <li>Customized solutions for your event</li>
              <li>On-time delivery and setup</li>
              <li>Comprehensive event management</li>
            </ul>
          </div>
          <div className="cta-section">
            <Link to="/contact" className="cta-btn primary">Get a Quote</Link>
            <Link to="/gallery" className="cta-btn secondary">View More Work</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;
