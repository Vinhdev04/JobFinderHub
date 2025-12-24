import React from 'react';
import './TopCompaniesSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const topCompanies = [
    { name: 'Abbott', jobs: 19, logo: 'https://via.placeholder.com/80?text=A' },
    { name: 'MAISON', jobs: 23, logo: 'https://via.placeholder.com/80?text=M' },
    {
        name: 'MATBAO',
        jobs: 85,
        logo: 'https://via.placeholder.com/80?text=MB'
    },
    {
        name: 'Viettel',
        jobs: 52,
        logo: 'https://via.placeholder.com/80?text=V'
    },
    {
        name: 'Abal Link Vietnam',
        jobs: 12,
        logo: 'https://via.placeholder.com/80?text=AL'
    },
    { name: 'MoMo', jobs: 13, logo: 'https://via.placeholder.com/80?text=MM' }
    // Add more from screenshots...
];

const TopCompaniesSection = () => {
    return (
        <section className='py-5 top-companies-section bg-light'>
            <div className='container'>
                <div className='mb-4 d-flex justify-content-between align-items-center'>
                    <h2 className='fw-bold'>Công ty nổi bật</h2>
                    <a href='#' className='text-primary fw-medium'>
                        Xem tất cả <i className='bi bi-chevron-right'></i>
                    </a>
                </div>
                <div className='row g-4'>
                    {topCompanies.map((company, index) => (
                        <div key={index} className='col-6 col-md-4 col-lg-2'>
                            <div
                                className='p-3 text-center border-0 shadow-sm card company-card animate__animated animate__zoomIn'
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className='mx-auto mb-3 rounded-circle'
                                    width='80'
                                    height='80'
                                    style={{ objectFit: 'contain' }}
                                />
                                <p className='mb-0 fw-medium'>
                                    <i className='bi bi-briefcase me-1'></i>
                                    {company.jobs} vị trí đang tuyển
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopCompaniesSection;
