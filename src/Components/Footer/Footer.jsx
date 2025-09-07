import React, { useState, useEffect } from 'react';
import './footer.css';
import logo from '../../Assets/icon/logo.png';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import emailService from '../../utils/emailService';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ type: '', message: '' });
  const [isSubscribing, setIsSubscribing] = useState(false);

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

    const sections = document.querySelectorAll('.footer-section');
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    setIsSubscribing(true);
    setNewsletterStatus({ type: '', message: '' });

    try {
      const result = await emailService.subscribeToNewsletter(newsletterEmail);
      
      if (result.success) {
        setNewsletterStatus({
          type: 'success',
          message: result.message
        });
        setNewsletterEmail('');
      } else {
        setNewsletterStatus({
          type: 'error',
          message: result.message
        });
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setNewsletterStatus({
        type: 'error',
        message: 'Failed to subscribe. Please try again.'
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Floating Elements */}
      <div className="footer-floating">
        <div className="floating-footer">🏠</div>
        <div className="floating-footer">📱</div>
        <div className="floating-footer">💫</div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section company-info">
            <div className="footer-logo">
              <img src={logo} alt="CNS Events Logo" />
              <h4>CNS Events</h4>
            </div>
            <p>
              Creating unforgettable moments and exceptional experiences for all your special occasions. 
              From intimate gatherings to grand celebrations, we bring your vision to life with creativity, 
              professionalism, and attention to detail.
            </p>
            <div className="social-media">
              <a href="https://www.facebook.com/groups/1291124617729570/?ref=share&mibextid=NSMWBT" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/cns.events.official?igsh=dTY5azR0aTg4ZWV2" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://wa.me/9001593567" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <NavLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li>
                <Link to="Contact" smooth={true} duration={1000}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section services-links">
            <h3>Our Services</h3>
            <ul>
              <li>
                <a href="/catering">Catering Service</a>
              </li>
              <li>
                <a href="/tentdeco">Tent Decoration</a>
              </li>
              <li>
                <a href="/sandf">Sound & Dance Floor</a>
              </li>
              <li>
                <a href="/flowerdeco">Flower Decoration</a>
              </li>
              <li>
                <a href="/stagedeco">Stage Decoration</a>
              </li>
              <li>
                <a href="/lightdeco">Light Decoration</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section contact-info">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <FaPhone />
                <span>9001593567</span>
              </li>
              <li>
                <FaEnvelope />
                <span>cnseventsofficial@gmail.com</span>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span>श्री दोजराज गणेश मंदिर रोड़, अग्रवाल भवन के सामने, डीडवाना</span>

                </li>
            </ul>

            {/* Newsletter */}
            <div className="newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for latest offers and updates</p>
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button type="submit" disabled={isSubscribing}>
                  {isSubscribing ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              
              {/* Newsletter Status Messages */}
              {newsletterStatus.message && (
                <div className={`newsletter-status ${newsletterStatus.type}`}>
                  {newsletterStatus.type === 'success' ? '✅' : '❌'} {newsletterStatus.message}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              © {currentYear} CNS Events. All rights reserved.
            </div>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
