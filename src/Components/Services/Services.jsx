import React, { useState, useEffect } from "react";
import "./Services.css";
import { FaArrowRight, FaUtensils, FaHome, FaMusic, FaSeedling, FaTheaterMasks, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import tent from "../../Assets/images/tent_1.jpeg";
import dnsFlr from "../../Assets/images/dance floor.jpeg";
import catering from "../../Assets/images/catering_1.webp";
import ld from "../../Assets/images/lightDecoration.jpg";
import flrDeco from "../../Assets/images/flower_decoration.jpg";
import stgDeco from "../../Assets/images/stage_decoration.jpg";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '50px' }
      );

      const services = document.querySelectorAll('.service');
      if (services.length > 0) {
        services.forEach((service) => observer.observe(service));
      }

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const serviceData = [
    {
      id: 1,
      title: "Catering Service",
      image: catering,
      link: "/catering",
      icon: <FaUtensils />,
      badge: "Popular",
      category: "catering"
    },
    {
      id: 2,
      title: "Tent Decoration",
      image: tent,
      link: "/tentdeco",
      icon: <FaHome />,
      badge: "Premium",
      category: "decoration"
    },
    {
      id: 3,
      title: "Sound & Dance Floor",
      image: dnsFlr,
      link: "/sandf",
      icon: <FaMusic />,
      badge: "Featured",
      category: "dancefloor"
    },
    {
      id: 4,
      title: "Flower Decoration",
      image: flrDeco,
      link: "/flowerdeco",
      icon: <FaSeedling />,
      badge: "Elegant",
      category: "decoration"
    },
    {
      id: 5,
      title: "Stage Decoration",
      image: stgDeco,
      link: "/stagedeco",
      icon: <FaTheaterMasks />,
      badge: "Creative",
      category: "stage"
    },
    {
      id: 6,
      title: "Light Decoration",
      image: ld,
      link: "/lightdeco",
      icon: <FaLightbulb />,
      badge: "Modern",
      category: "lighting"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'catering', name: 'Catering' },
    { id: 'decoration', name: 'Decoration' },
    { id: 'stage', name: 'Stage' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'dancefloor', name: 'Dance Floor' }
  ];

  // Debug: Log image paths
  console.log('Service Data Images:', serviceData.map(s => ({ title: s.title, image: s.image })));

  const filteredServices = activeCategory === 'all' 
    ? serviceData 
    : serviceData.filter(service => service.category === activeCategory);

  const stats = [
    { number: "500+", label: "Events Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="services" id="Services">
      {/* Floating Elements */}
      <div className="services-floating">
        <div className="floating-shape">🎪</div>
        <div className="floating-shape">🎨</div>
        <div className="floating-shape">✨</div>
      </div>

      <div className="services-container">
        <div className="ourServices-text">
          <h1>Our Services</h1>
          <p>
            हम कैटरिंग की सभी प्रकार की सुविधा उपलब्ध कराते हैं इसके साथ ही हमारे
            पास वेटर, हलवाई, टेंट डेकोरेशन सर्विस,लाइट डेकोरेशन, साउंड और डांस
            फ्लोर, फ्लावर डेकोरेशन, स्टेज डेकोरेशन, हल्दी स्पेशल डेकोरेशन,
            फोटोग्राफी, डीजे, बारात बस आदि की भी सुविधा उपलब्ध है|
          </p>
        </div>

        {/* Category Pills */}
        <div className="service-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-pill ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="ourServices">
          {filteredServices.map((service) => (
            <div key={service.id} className="service visible">
              <div className="service-image">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  onError={(e) => {
                    console.error('Service image failed to load:', service.title, service.image);
                    e.target.style.border = '2px solid red';
                  }}
                  onLoad={() => console.log('Service image loaded successfully:', service.title)}
                />
                <div className="service-icon">{service.icon}</div>
                <div className="service-badge">{service.badge}</div>
              </div>
              <div className="service-title">
                <Link to={service.link}>
                  <p>{service.title}</p>
                  <span>
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Service Statistics */}
        <div className="service-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Related Images Gallery */}
        <div className="related-images">
          <h3>Our Work Gallery</h3>
          <div className="images-grid">
            {serviceData.map((service) => (
              <div key={service.id} className="gallery-item">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  onError={(e) => {
                    console.error('Image failed to load:', service.title, service.image);
                    e.target.style.border = '2px solid red';
                  }}
                  onLoad={() => console.log('Image loaded successfully:', service.title)}
                />
                <div className="image-overlay">
                  <span className="service-name">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
