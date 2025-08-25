import React, { useState, useEffect } from 'react';
import './galleryPage.css';
import { FaFilter, FaTimes, FaSearch, FaDownload, FaShare, FaImages, FaStar, FaAward } from 'react-icons/fa';
import { SliderData } from './SliderData';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate actual counts from SliderData
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return SliderData.length;
    return SliderData.filter(image => image.category === categoryId).length;
  };

  const categories = [
    { id: 'all', name: 'All Images', count: getCategoryCount('all') },
    { id: 'catering', name: 'Catering', count: getCategoryCount('catering') },
    { id: 'decoration', name: 'Decoration', count: getCategoryCount('decoration') },
    { id: 'stage', name: 'Stage', count: getCategoryCount('stage') },
    { id: 'lighting', name: 'Lighting', count: getCategoryCount('lighting') },
    { id: 'tent', name: 'Tent', count: getCategoryCount('tent') },
    { id: 'dancefloor', name: 'Dance Floor', count: getCategoryCount('dancefloor') }
  ];

  const filteredImages = SliderData.filter(image => {
    const matchesCategory = selectedCategory === 'all' || 
      (image.category && image.category === selectedCategory);
    const matchesSearch = !searchTerm || 
      (image.title && image.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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

    const images = document.querySelectorAll('.gallery-item');
    images.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, [filteredImages]);

  return (
    <div className="gallery-page">
      {/* Professional Hero Section */}
      <div className="gallery-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <FaImages />
            <span>Portfolio</span>
          </div>
          <h1>Our Gallery</h1>
          <p>Explore our stunning work and creative designs that bring events to life</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{SliderData.length}+</span>
              <span className="stat-label">Images</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{categories.length - 1}</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Introduction */}
      <section className="gallery-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Capturing Moments, Creating Memories</h2>
              <p>
                Our gallery showcases the artistry and attention to detail that goes into every event we manage. 
                From intimate gatherings to grand celebrations, each image tells a story of creativity, 
                professionalism, and unforgettable experiences.
              </p>
            </div>
            <div className="intro-features">
              <div className="feature">
                <FaStar />
                <h3>Premium Quality</h3>
                <p>Every image represents our commitment to excellence</p>
              </div>
              <div className="feature">
                <FaAward />
                <h3>Professional Work</h3>
                <p>Years of experience reflected in every detail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="gallery-controls">
        <div className="container">
          <div className="controls-wrapper">
            {/* Search */}
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search images by title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="category-filter">
              <button className="filter-toggle">
                <FaFilter />
                Filter by Category
              </button>
              <div className="category-dropdown">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-option ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                    <span className="count">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-header">
            <div className="gallery-stats">
              <h3>Gallery Results</h3>
              <p>Showing {filteredImages.length} of {SliderData.length} images</p>
            </div>
            <div className="gallery-actions">
              <button className="view-toggle active">Grid View</button>
              <button className="view-toggle">Masonry View</button>
            </div>
          </div>
          
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div key={index} className="gallery-item" onClick={() => openModal(image)}>
                <div className="image-wrapper">
                  <img src={image.image} alt={image.title || 'Gallery Image'} />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <FaSearch className="overlay-icon" />
                      <p>Click to view</p>
                    </div>
                  </div>
                  <div className="image-category">
                    <span>{image.category}</span>
                  </div>
                </div>
                {image.title && (
                  <div className="image-info">
                    <h3>{image.title}</h3>
                    {image.description && <p>{image.description}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">
                <FaImages />
              </div>
              <h3>No images found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button 
                className="reset-filters"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            
            <div className="modal-image">
              <img src={selectedImage.image} alt={selectedImage.title || 'Gallery Image'} />
            </div>
            
            <div className="modal-info">
              {selectedImage.title && <h3>{selectedImage.title}</h3>}
              {selectedImage.description && <p>{selectedImage.description}</p>}
              {selectedImage.category && (
                <div className="modal-category">
                  <span>Category: {selectedImage.category}</span>
                </div>
              )}
              
              <div className="modal-actions">
                <button className="action-btn">
                  <FaDownload />
                  Download
                </button>
                <button className="action-btn">
                  <FaShare />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Professional CTA Section */}
      <section className="gallery-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Inspired by Our Work?</h2>
              <p>Let's create something amazing together for your next event. Our team is ready to bring your vision to life with creativity and professionalism.</p>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get a Quote</a>
              <a href="/services" className="btn btn-outline">View Services</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
