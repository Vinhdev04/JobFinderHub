import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <Navbar />
      <main className="default-layout__content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;