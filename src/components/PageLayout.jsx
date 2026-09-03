import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout-wrapper">
      <Navbar />
      <main className="page-main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;

