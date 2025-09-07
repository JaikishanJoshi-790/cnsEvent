import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/icon/logo.png";
import { IoAccessibility, IoHome } from "react-icons/io5";
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
          
         <NavLink 
            to="/services"
            onClick={closeMobileMenu}
            className="navbar-menu-items"
          >
            <IoAccessibility />
            <span>Services</span>
          </NavLink>
          
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
