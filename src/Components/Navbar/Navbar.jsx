import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../Assets/logo.png";
import { IoHome } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { MdRestaurantMenu } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="" />
        <p>Cns events</p>
      </div>
      <div className="navbar-menu">
        <Link to="Home" smooth className="navbar-menu-items">
          <IoHome />
          <p>home</p>
        </Link>
        <Link to="Services" smooth className="navbar-menu-items">
          <MdRestaurantMenu />
          <p>services</p>
        </Link>
        <Link to="Gallery" smooth className="navbar-menu-items">
          <GrGallery />
          <p>gallery</p>
        </Link>
        <Link to="Contact" smooth className="navbar-menu-items">
          <IoIosContact />
          <p>contact</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
