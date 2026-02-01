import React from 'react';
import '../styles/TopCompaniesSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const topCompanies = [
    {
        name: 'Abbott',
        jobs: 19,
        logo: 'https://logos-world.net/wp-content/uploads/2023/03/Abbott-Logo-1986.png'
    },
    {
        name: 'MAISON',
        jobs: 23,
        logo: 'https://vesinhhoangmy.com/wp-content/uploads/2024/06/z5692841490449_fc17a15a3e105666ad05dd142d7c37a6.jpg'
    },
    {
        name: 'MATBAO',
        jobs: 85,
        logo: 'https://i.ytimg.com/vi/LCd4l3xyC9M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDKQORIebRTdJw3cJpXlUM6o1PoKg'
    },
    {
        name: 'Viettel',
        jobs: 52,
        logo: 'https://cdn.prod.website-files.com/67528de23bee2c4c08297aef/67aa3028ff79371e52078222_Viettel%20Group.png'
    },
    {
        name: 'Abal Link Vietnam',
        jobs: 12,
        logo: 'https://media.licdn.com/dms/image/v2/D4E22AQFgozmK3oQmHA/feedshare-shrink_800/B4EZkV8Z1sGoAk-/0/1757009781634?e=2147483647&v=beta&t=Tv8Ph42_CSCn11qQl5Eu031kqVDSqAPp0pZWcZVNoVk'
    },
    {
        name: 'MoMo',
        jobs: 13,
        logo: 'https://logos-world.net/wp-content/uploads/2024/12/MoMo-Logo-Old.png'
    }
    // Add more from screenshots...
];

const TopCompaniesSection = () => {
    return (
        <section className='py-5 top-companies-section bg-light'>
            <div className='container'>
                <div className='mb-4 d-flex justify-content-between align-items-center'>
                    <h2 className='fw-bold'>Top Companies</h2>
                    <a href='#' className='text-primary fw-medium'>
                        View All <i className='bi bi-chevron-right'></i>
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
                                    {company.jobs} positions open
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
