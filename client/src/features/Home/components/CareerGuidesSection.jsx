import React from 'react';
import '../styles/CareerGuidesSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const careerGuides = [
    {
        title: 'Top 5 Power Plant Jobs with High Income',
        description:
            'How to find power plant jobs today? Popular positions in power plant recruitment?...',
        image: 'https://www.witf.io/wp-content/uploads/2021/09/yale-climate-connections-graphic-energy-jobs-1920x1215.png' // Updated
    },
    {
        title: 'What is a Part-Time Employee? 11 High-Paying Part-Time Jobs',
        description:
            'What is a part-time employee? If interested in this work form, explore details with JobFinderHub...',
        image: 'https://www.homeworkhelpglobal.com/wp-content/uploads/2018/11/student-job.jpg' // Updated
    },
    {
        title: 'What is a Machine Operator? Job Description, Salary...',
        description:
            'What is a machine operator? Required skills for this position? Salary range?...',
        image: 'https://resumegenius.com/wp-content/uploads/Machine-Operator-Resume-Job-Description-ATS-Keywords-Example.png' // Updated
    },
    // Add more...
    {
        title: 'How to Start in IT',
        description: 'Guide to entering the IT field...',
        image: 'https://via.placeholder.com/400x250?text=IT+Guide' // Placeholder
    }
];

const CareerGuidesSection = () => {
    return (
        <section className='py-5 bg-white career-guides-section'>
            <div className='container'>
                <h2 className='mb-5 text-center fw-bold'>Career Guides</h2>
                <div className='row g-4'>
                    {careerGuides.map((guide, index) => (
                        <div key={index} className='col-md-4'>
                            <div
                                className='border-0 shadow card guide-card animate__animated animate__fadeInLeft'
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <img
                                    src={guide.image}
                                    className='card-img-top'
                                    alt={guide.title}
                                />
                                <div className='card-body'>
                                    <h5 className='card-title fw-bold'>
                                        {guide.title}
                                    </h5>
                                    <p className='card-text text-muted'>
                                        {guide.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-4 text-center'>
                    <a href='#' className='btn btn-primary rounded-pill'>
                        View More Guides
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CareerGuidesSection;
