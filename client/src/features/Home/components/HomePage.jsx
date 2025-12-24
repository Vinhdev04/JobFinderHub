import React from 'react';
import HeroSection from './HeroSection';
import CategoriesSection from './CategoriesSection';
import FeaturedJobsSection from './FeaturedJobsSection';
import BestJobsSection from './BestJobsSection';
import TopCompaniesSection from './TopCompaniesSection';
import CareerGuidesSection from './CareerGuidesSection';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='home-container'>
            <HeroSection />
            <CategoriesSection />
            <FeaturedJobsSection />
            <BestJobsSection />
            <TopCompaniesSection />
            <CareerGuidesSection />
        </div>
    );
};

export default HomePage;
