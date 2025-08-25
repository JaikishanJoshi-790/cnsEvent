import React from 'react';
import "./App.css"
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

const All = () => {
  return (
    <>
      <section id='Home'><Hero/></section>
      <section id='Services'><Services/></section>
      <section id='Contact'><Contact/></section>
    </>
  );
}

export default All;
