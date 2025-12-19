// DefaultLayout.jsx (ĐÃ SỬA - Dọn dẹp)

import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import Footer from '../../shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import BackToTop from '../../shared/BackToTop/BackToTop';

const DefaultLayout = () => {
  return (
    <div className="default-layout">
      <Navbar />
    
      <main className="default-layout__content">
        <Outlet />
      </main>
      <BackToTop/>
      <Footer />
    </div>
  );
};
export default DefaultLayout;