import React from 'react';
import "./App.css"
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import { Helmet } from 'react-helmet-async';
const All = () => {
  return (
    <>
    <Helmet>
        <title>CNS Event | Best Event Management in Rajasthan</title>
        <meta 
          name="description" 
          content="CNS Event provides catering, decoration, sound, lighting, and full event management services in Rajasthan." 
        />
        <meta name="keywords" content="CNS Event, Event Management, Catering, Decoration, Rajasthan" />
      </Helmet>
      <section id='Home'><Hero/></section>
      <section id='Services'><Services/></section>
      <section id='Contact'><Contact/></section>
    </>
  );
}

export default All;
