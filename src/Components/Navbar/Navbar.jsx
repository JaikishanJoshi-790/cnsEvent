import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/icon/logo.png";
import { IoHome } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { MdRestaurantMenu } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="CNS Events Logo" />
          <p>CNS Events</p>
        </div>
        
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <NavLink
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              closeMobileMenu();
            }}
            className="navbar-menu-items"
            end
          >
            <IoHome />
            <span>Home</span>
          </NavLink>
          
          <NavLink 
            to="/about"
            onClick={closeMobileMenu}
            className="navbar-menu-items"
          >
            <IoInformationCircle />
            <span>About</span>
          </NavLink>
          
          {/* Services Dropdown */}
          <div 
            className={`navbar-dropdown ${isServicesOpen ? 'active' : ''}`}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className="navbar-menu-items dropdown-trigger"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <MdRestaurantMenu />
              <span>Services</span>
              <FaChevronDown className={`dropdown-arrow ${isServicesOpen ? 'rotated' : ''}`} />
            </button>
            
            <div className="dropdown-menu">
              <Link to="Services" smooth className="dropdown-item" onClick={closeMobileMenu}>
                <span>View All Services</span>
              </Link>
              <div className="dropdown-divider"></div>
              <NavLink to="/catering" onClick={closeMobileMenu} className="dropdown-item">
                <span>Catering Service</span>
              </NavLink>
              <NavLink to="/tentdeco" onClick={closeMobileMenu} className="dropdown-item">
                <span>Tent Decoration</span>
              </NavLink>
              <NavLink to="/sandf" onClick={closeMobileMenu} className="dropdown-item">
                <span>Sound & Dance Floor</span>
              </NavLink>
              <NavLink to="/flowerdeco" onClick={closeMobileMenu} className="dropdown-item">
                <span>Flower Decoration</span>
              </NavLink>
              <NavLink to="/stagedeco" onClick={closeMobileMenu} className="dropdown-item">
                <span>Stage Decoration</span>
              </NavLink>
              <NavLink to="/lightdeco" onClick={closeMobileMenu} className="dropdown-item">
                <span>Light Decoration</span>
              </NavLink>
            </div>
          </div>
          
          <NavLink 
            to="/gallery"
            onClick={closeMobileMenu}
            className="navbar-menu-items"
          >
            <GrGallery />
            <span>Gallery</span>
          </NavLink>
          
          <NavLink 
            to="/contact"
            onClick={closeMobileMenu}
            className="navbar-menu-items"
          >
            <IoIosContact />
            <span>Contact</span>
          </NavLink>
        </div>

        <div 
          className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
