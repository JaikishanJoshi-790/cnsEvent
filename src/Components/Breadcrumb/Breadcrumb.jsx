import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import './breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getPageTitle = (path) => {
    const titles = {
      'about': 'About Us',
      'gallery': 'Gallery',
      'contact': 'Contact',
      'catering': 'Catering Service',
      'tentdeco': 'Tent Decoration',
      'sandf': 'Sound & Dance Floor',
      'flowerdeco': 'Flower Decoration',
      'stagedeco': 'Stage Decoration',
      'lightdeco': 'Light Decoration'
    };
    return titles[path] || path.charAt(0).toUpperCase() + path.slice(1);
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="breadcrumb-nav">
      <div className="breadcrumb-container">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-link home-link">
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            
            return (
              <li key={name} className="breadcrumb-item">
                {isLast ? (
                  <span className="breadcrumb-current">
                    {getPageTitle(name)}
                  </span>
                ) : (
                  <Link to={routeTo} className="breadcrumb-link">
                    {getPageTitle(name)}
                  </Link>
                )}
                {!isLast && <FaChevronRight className="breadcrumb-separator" />}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
