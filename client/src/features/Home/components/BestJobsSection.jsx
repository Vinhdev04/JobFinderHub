import React from 'react';
import '../styles/BestJobsSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const bestJobs = [
    {
        id: 1,
        title: 'Technical Operation Staff - Treatment Plant...',
        company: 'MITEX',
        salary: '10 - 15 million',
        location: 'Hanoi',
        daysLeft: 1,
        logo: 'https://www.mitex.co.in/cdn/shop/files/MITEX_LOGO_PNG.png?v=1731743580&width=500' // Updated
    },
    // Added more...
    {
        id: 2,
        title: 'Marketing Specialist',
        company: 'Marketing Co',
        salary: '12 - 18 million',
        location: 'Ho Chi Minh',
        daysLeft: 5,
        logo: 'https://via.placeholder.com/60?text=MC' // Placeholder if needed
    }
];

const BestJobsSection = () => {
    return (
        <section className='py-5 bg-white best-jobs-section'>
            <div className='container'>
                <h2 className='mb-4 fw-bold'>Best Jobs</h2>
                <div className='row g-4'>
                    {bestJobs.map((job, index) => (
                        <div key={job.id} className='col-md-6 col-lg-4'>
                            <div
                                className='border-0 shadow card job-card h-100 animate__animated animate__fadeIn'
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className='card-body d-flex flex-column'>
                                    <div className='d-flex justify-content-between align-items-start'>
                                        <img
                                            src={job.logo}
                                            alt='company logo'
                                            className='rounded-circle'
                                            width='50'
                                            height='50'
                                        />
                                        <i className='cursor-pointer bi bi-heart fs-4 text-muted'></i>
                                    </div>
                                    <h5 className='mt-3 card-title fw-bold'>
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
                                    <div className='mt-auto'>
                                        <span className='text-danger'>
                                            <i className='bi bi-clock me-1'></i>
                                            {job.daysLeft} days left
                                        </span>
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

export default BestJobsSection;
