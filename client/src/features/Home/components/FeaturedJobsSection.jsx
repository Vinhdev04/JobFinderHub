import React, { useState } from 'react';
import './FeaturedJobsSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const featuredJobs = [
    {
        id: 1,
        title: 'Kỹ Thuật Viên Than Vô Ở Lương Trên 10Tr...',
        company: 'Công Ty TNHH Toyota Hải Phòng',
        salary: '10 - 15 triệu',
        location: 'Hải Phòng',
        daysLeft: 22,
        logo: 'https://via.placeholder.com/60?text=T',
        isHot: true
    },
    {
        id: 2,
        title: 'Nhân Viên Kế Toán Tòa Nhà',
        company: 'IMCS',
        salary: '10 - 15 triệu',
        location: 'Hà Nội',
        daysLeft: 6,
        logo: 'https://via.placeholder.com/60?text=I'
    }
];

const cities = [
    'Tất cả',
    'Hà Nội',
    'Bộc Giang',
    'Bắc Kạn',
    'Bắc Ninh',
    'Cao Bằng',
    'Hà Giang'
];

const FeaturedJobsSection = () => {
    const [selectedCity, setSelectedCity] = useState('Tất cả');

    return (
        <section className='py-5 featured-jobs-section bg-light'>
            <div className='container'>
                <div className='flex-wrap gap-3 mb-4 d-flex justify-content-between align-items-center'>
                    <h2 className='fw-bold'>
                        <i className='bi bi-fire text-danger me-2'></i>Việc làm
                        tuyển gấp
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
                    {featuredJobs.map((job, index) => (
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
                                    <div className='mt-auto d-flex justify-content-between align-items-center'>
                                        <span className='text-danger'>
                                            <i className='bi bi-clock me-1'></i>
                                            Còn {job.daysLeft} ngày
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
