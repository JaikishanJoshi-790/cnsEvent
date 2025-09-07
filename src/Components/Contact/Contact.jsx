import React, { useRef, useState, useEffect } from 'react';
import './contact.css';
import { IoLocationSharp } from 'react-icons/io5';
import { FaRegAddressBook, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import { FaPhone as FaPhoneAlt } from 'react-icons/fa';
import emailService from '../../utils/emailService';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    mobile_number: '',
    email: '',
    description: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [waitmessage, setWaitMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.contact-address, .contact-form');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log('Form submission started');
    console.log('Form data:', formData);
    
    setIsSubmitting(true);
    setWaitMessage(false);
    setSuccess(false);
    setError(false);
    setValidationErrors([]);

    try {
      // Validate form data
      const validation = emailService.validateFormData(formData);
      console.log('Validation result:', validation);
      
      if (!validation.isValid) {
        setValidationErrors(validation.errors);
        setIsSubmitting(false);
        return;
      }

      console.log('Validation passed, sending email...');
      // Send email using email service
      const result = await emailService.sendEmail(formData);
      console.log('Email service result:', result);
      
      if (result.success) {
        setSuccess(true);
        setFormData({
          name: '',
          mobile_number: '',
          email: '',
          description: ''
        });
        setValidationErrors([]);
        
        // Optional: Send customer confirmation
        // await emailService.sendCustomerConfirmation(formDataObj);
        
      } else {
        setError(true);
        setValidationErrors([result.message]);
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setError(true);
      setValidationErrors(['An unexpected error occurred. Please try again.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    clearMessages();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = form.current.checkValidity();
    if (isFormValid) {
      sendEmail(e);
    } else {
      setValidationErrors(['Please fill in all required fields.']);
    }
  };





  const clearMessages = () => {
    setSuccess(false);
    setError(false);
    setWaitMessage(false);
    setValidationErrors([]);
  };

  return (
    <div className="contact" id="Contact">
      {/* Floating Elements */}
      <div className="contact-floating">
        <div className="floating-contact">📧</div>
        <div className="floating-contact">📞</div>
        <div className="floating-contact">📍</div>
      </div>

      <div className="contact-container">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <p>
            Ready to plan your perfect event? Fill out the form below and we'll get back to you within 24 hours
            with a personalized quote and consultation.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-address">
            <h2>
              <IoIosContact />
              Anil Sharma
            </h2>
            <h2>
              <FaPhoneAlt />
              9001593567
            </h2>
            <h2>
              <FaRegAddressBook />
              श्री दोजराज गणेश मंदिर रोड़, अग्रवाल भवन के सामने, डीडवाना
            </h2>
            <h2>
              <IoLocationSharp />
              <a 
                href="https://maps.google.com/?q=सरस+डेयरी,+चुंगी+चौकी,+डीडवाना+(341303)" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                View on Map
              </a>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="contact-form" ref={form}>
            {/* Validation Errors */}
            {validationErrors.length > 0 && (
              <div className="validation-errors">
                {validationErrors.map((error, index) => (
                  <div key={index} className="error-message">
                    <span>⚠️</span> {error}
                  </div>
                ))}
              </div>
            )}

            <div className="form-group">
              <input 
                required 
                type="text" 
                placeholder="Full Name *" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <input 
                required 
                type="tel" 
                placeholder="Mobile Number *" 
                name="mobile_number" 
                pattern="[0-9]{10,12}"
                value={formData.mobile_number}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Email Address (Optional)" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <textarea 
                required 
                name="description" 
                placeholder="Tell us about your event (type, theme, special requirements) *" 
                cols="30" 
                rows="5"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button 
              className="submit-btn" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="loading">
                  <div className="loading-spinner"></div>
                  Sending Inquiry...
                </div>
              ) : (
                'Send Inquiry'
              )}
            </button>



            {/* Status Messages */}
            {waitmessage && (
              <div className="message wait">
                <span>⏳</span> Please wait - it may take time because it's a free service
              </div>
            )}
            
            {error && (
              <div className="message error">
                <span>❌</span> {validationErrors.length > 0 ? validationErrors[0] : 'Error submitting the form. Please try again.'}
              </div>
            )}
            
            {success && (
              <div className="message success">
                <span>✅</span> Inquiry submitted successfully! We'll get back to you within 24 hours.
              </div>
            )}
          </form>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-info-cards">
          <div className="contact-card">
            <div className="contact-card-icon">
              <FaPhone />
            </div>
            <h3>Call Us</h3>
            <p>Available 24/7 for urgent inquiries and support</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-icon">
              <FaEnvelope />
            </div>
            <h3>Email Us</h3>
            <p>Send us your requirements and we'll respond within 24 hours</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-icon">
              <FaClock />
            </div>
            <h3>Response Time</h3>
            <p>We typically respond to all inquiries within 2-4 hours</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-card-icon">
              <IoLocationSharp />
            </div>
            <h3>Service Area</h3>
            <p>Covering Didwana and surrounding areas within 180km radius</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
