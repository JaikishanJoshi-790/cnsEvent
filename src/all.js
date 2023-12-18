import React from 'react';
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import Gallery from './Components/Gallery/Gallery';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const All = () => {
  return (
    <>
    <section><Navbar/></section>
      <section id='Home'><Hero/></section>
      <section id='Services'><Services/></section>
      <section id='Gallery'><Gallery/></section>
      <section id='Contact'><Contact/></section>
      <section><Footer/></section>
    </>
  );
}

export default All;
