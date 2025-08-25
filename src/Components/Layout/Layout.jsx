import React from 'react';
import './Layout.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Layout = ({ children, showBreadcrumb = false, breadcrumbData = [] }) => {
  return (
    <div className="layout">
      <Navbar />
      {showBreadcrumb && breadcrumbData.length > 0 && (
        <Breadcrumb data={breadcrumbData} />
      )}
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
