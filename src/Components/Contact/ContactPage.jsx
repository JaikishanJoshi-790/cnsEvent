import React from 'react';
import './contactPage.css';
import Contact from './Contact';
import { IoIosContact, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
const ContactPage = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us | CNS Event</title>
        <meta 
          name="description" 
          content="Get in touch with CNS Event for the best catering, decoration, and event management services in Rajasthan." 
        />
        <meta name="keywords" content="CNS Event Contact, Event Booking, Catering Contact, Rajasthan Event Management" />
      </Helmet>
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us for your next event</p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="card-icon">
                <FaPhone />
              </div>
              <h3>Call Us</h3>
              <p>9001593567</p>
              <span>Available 24/7</span>
            </div>
            
            <div className="contact-info-card">
              <div className="card-icon">
                <FaEnvelope />
              </div>
              <h3>Email Us</h3>
              <p>support@cnsevent.in</p>
              <span>Response within 24 hours</span>
            </div>
            
            <div className="contact-info-card">
              <div className="card-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Visit Us</h3>
              <p>श्री दोजराज गणेश मंदिर रोड़, अग्रवाल भवन के सामने, डीडवाना</p>
              <span>Rajasthan, India</span>
            </div>
            
            <div className="contact-info-card">
              <div className="card-icon">
                <FaClock />
              </div>
              <h3>Business Hours</h3>
              <p>Monday - Sunday</p>
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <Contact />
    </div>
  );
};

export default ContactPage;
