import React, { useEffect } from 'react';
import './about.css';
import { IoIosContact, FaPhone, FaMapMarkerAlt, FaAward, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import founderImage from "../../Assets/images/founder.webp"
import founderImageForStory from '../../Assets/images/FounderMain.webp'
import creativeTeamImage from '../../Assets/images/CreativeTeam.webp'
import cateringTeam from '../../Assets/images/cateringTeam.webp'

const About = () => {
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

    const elements = document.querySelectorAll('.about-section, .team-member, .achievement-card');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { icon: <FaAward />, number: "500+", label: "Events Completed" },
    { icon: <FaUsers />, number: "400+", label: "Happy Clients" },
    { icon: <FaCalendarAlt />, number: "7+", label: "Years Experience" },
    { icon: <FaPhone />, number: "24/7", label: "Support Available" }
  ];

  const teamMembers = [
  {
    name: "Anil Sharma",
    position: "Founder & CEO",
    description: "Leading CNS Events with over 7 years of experience in event management",
    image: founderImage
  },
  {
    name: "Creative Team",
    position: "Design & Decoration",
    description: "Expert designers creating magical atmospheres for every event",
    image: creativeTeamImage
  },
  {
    name: "Team",
position: "Management & Staff",
description: "Dedicated professionals working with passion, integrity, and care to create unforgettable experiences.",
image: cateringTeam

  }
];

  return (
    <div className="about-page">
      <Helmet>
  <title>About Us | CNS Event</title>
  <meta 
    name="description" 
    content="Learn more about CNS Event - your trusted partner for weddings, parties, and corporate events." 
  />
</Helmet>
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About CNS Events</h1>
          <p>Creating Unforgettable Moments Since 2018</p>
        </div>
      </div>

      {/* Company Story */}
      <section className="about-section company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                CNS Events was founded in 2018 with a simple yet powerful vision: to transform ordinary 
                gatherings into extraordinary celebrations. What started as a small team of passionate 
                event enthusiasts has grown into one of Didwana's most trusted event management companies.
              </p>
              <p>
                We believe that every event tells a story, and we're here to make that story 
                unforgettable. From intimate family gatherings to grand corporate events, we pour our 
                heart and soul into every detail.
              </p>
            </div>
            <div className="story-image">
              <div className=''>
               <img src={founderImageForStory} alt='Founder Imag' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-section mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional event experiences that exceed expectations, creating lasting 
                memories for our clients and their guests through creativity, professionalism, and 
                attention to detail.
              </p>
            </div>
            <div className="vision-card">
              <h3>Our Vision</h3>
              <p>
                To become the leading event management company in Rajasthan, known for innovation, 
                quality, and creating magical moments that inspire and delight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="about-section achievements">
        <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-section team">
  <div className="container">
    <h2>Our Team</h2>
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <div className="member-image">
            <img src={member.image} alt={member.name} />
          </div>
          <div className="member-info">
            <h3>{member.name}</h3>
            <p className="position">{member.position}</p>
            <p className="description">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Values */}
      <section className="about-section values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our service delivery</p>
            </div>
            <div className="value-card">
              <h3>Creativity</h3>
              <p>Innovation and creativity drive our unique event designs</p>
            </div>
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Honest, transparent, and trustworthy in all our dealings</p>
            </div>
            <div className="value-card">
              <h3>Passion</h3>
              <p>We're passionate about creating magical moments</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Your Perfect Event?</h2>
            <p>Let's work together to make your vision a reality</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/services" className="btn btn-outline">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
