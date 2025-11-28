import React, { useState, useEffect } from 'react';
import { UpOutlined } from '@ant-design/icons';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.pageYOffset / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

 return (
    <div className={`back-to-top ${isVisible ? 'back-to-top--visible' : ''}`}>
      <button 
        className="back-to-top__button theme-transition" 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        {/* KHẮC PHỤC: Bọc nội dung bên trong nút bằng một <span> duy nhất */}
        <span> 
          <svg className="back-to-top__progress" viewBox="0 0 100 100">
            <circle 
              className="back-to-top__progress-bg" 
              cx="50" 
              cy="50" 
              r="46"
            />
            <circle 
              className="back-to-top__progress-bar" 
              cx="50" 
              cy="50" 
              r="46"
              style={{
                strokeDashoffset: `${289 - (289 * scrollProgress) / 100}`
              }}
            />
          </svg>
          <div className="back-to-top__icon">
            <UpOutlined />
          </div>
        </span> 
      </button>
    </div>
  );

};

export default BackToTop;