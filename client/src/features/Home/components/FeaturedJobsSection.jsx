import React, { useState } from 'react';
import '../styles/FeaturedJobsSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const featuredJobs = [
    {
        id: 1,
        title: 'Technician - Salary Over 10M...',
        company: 'Toyota Hai Phong Co., Ltd',
        salary: '10 - 15 million',
        location: 'Hai Phong',
        daysLeft: 22,
        logo: 'https://thumbs.dreamstime.com/b/toyota-logo-building-official-dealer-213017167.jpg', // Updated
        isHot: true
    },
    {
        id: 2,
        title: 'Building Accountant',
        company: 'IMCS',
        salary: '10 - 15 million',
        location: 'Hanoi',
        daysLeft: 6,
        logo: 'https://cdn.sanity.io/images/f5b6mtfn/selectscience-prod/9114c53847025e368eeae94d931e2d99e8751e3e-300x175.jpg?rect=0,9,300,158&w=1200&h=630' // Updated
    },
    // Added more for demo
    {
        id: 3,
        title: 'Software Engineer',
        company: 'Tech Corp',
        salary: '15 - 20 million',
        location: 'Ho Chi Minh',
        daysLeft: 10,
        logo: 'https://via.placeholder.com/60?text=TC', // Placeholder if needed
        isHot: false
    }
];

const cities = [
    'All',
    'Hanoi',
    'Bac Giang',
    'Bac Kan',
    'Bac Ninh',
    'Cao Bang',
    'Ha Giang',
    'Ho Chi Minh' // Added
];

const FeaturedJobsSection = () => {
    const [selectedCity, setSelectedCity] = useState('All');

    // Filter jobs by city (demo logic)
    const filteredJobs =
        selectedCity === 'All'
            ? featuredJobs
            : featuredJobs.filter((job) => job.location.includes(selectedCity));

    return (
        <section className='py-5 featured-jobs-section bg-light'>
            <div className='container'>
                <div className='flex-wrap gap-3 mb-4 d-flex justify-content-between align-items-center'>
                    <h2 className='fw-bold'>
                        <i className='bi bi-fire text-danger me-2'></i>Urgent
                        Hiring Jobs
                    </h2>
                    <div className='gap-2 pb-2 overflow-auto city-tabs d-flex'>
                        {cities.map((city) => (
                            <button
                                key={city}
                                className={`btn ${
                                    selectedCity === city
                                        ? 'btn-primary'
                                        : 'btn-outline-primary'
                                } rounded-pill fw-medium px-3`}
                                onClick={() => setSelectedCity(city)}
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='row g-4'>
                    {filteredJobs.map((job, index) => (
                        <div key={job.id} className='col-md-6 col-lg-4'>
                            <div
                                className='border-0 shadow card job-card h-100 animate__animated animate__fadeIn'
                                style={{ animationDelay: `${index * 0.1}s` }}
                                role='article'
                                aria-labelledby={`job-title-${job.id}`}
                            >
                                <div className='card-body d-flex flex-column'>
                                    <div className='d-flex justify-content-between align-items-start'>
                                        <img
                                            src={job.logo}
                                            alt={`${job.company} logo`}
                                            className='rounded-circle'
                                            width='50'
                                            height='50'
                                            style={{ objectFit: 'contain' }}
                                        />
                                        <i className='cursor-pointer bi bi-heart fs-4 text-muted'></i>
                                    </div>
                                    <h5
                                        id={`job-title-${job.id}`}
                                        className='mt-3 card-title fw-bold'
                                    >
                                        {job.title}
                                    </h5>
                                    <p className='mb-2 text-muted'>
                                        {job.company}
                                    </p>
                                    <div className='gap-2 mb-3 d-flex'>
                                        <span className='badge bg-success'>
                                            <i className='bi bi-currency-dollar me-1'></i>
                                            {job.salary}
                                        </span>
                                        <span className='badge bg-info'>
                                            <i className='bi bi-geo-alt me-1'></i>
                                            {job.location}
                                        </span>
                                    </div>
                                    <div className='mt-auto d-flex justify-content-between align-items-center'>
                                        <span className='text-danger'>
                                            <i className='bi bi-clock me-1'></i>
                                            {job.daysLeft} days left
                                        </span>
                                        {job.isHot && (
                                            <span className='badge bg-danger'>
                                                HOT
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedJobsSection;
