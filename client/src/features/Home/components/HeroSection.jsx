import React, { useState } from 'react';
import '../styles/HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const HeroSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jobCategory, setJobCategory] = useState('All Categories');
    const [location, setLocation] = useState('All Locations');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add search logic here (e.g., redirect or API call)
        console.log({ searchTerm, jobCategory, location });
    };

    return (
        <section className='hero-section animate__animated animate__fadeIn'>
            <div className='container'>
                <div className='mb-5 text-center'>
                    <h1 className='text-white display-3 fw-bold'>
                        Find Your Dream Job at JobFinderHub
                    </h1>
                    <p className='lead text-white-50'>
                        Thousands of job opportunities awaiting you
                    </p>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <form
                            onSubmit={handleSubmit}
                            className='flex-wrap gap-2 p-3 bg-white shadow-lg search-form d-flex rounded-5'
                        >
                            <div className='flex-grow-1 position-relative'>
                                <i className='bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-primary fs-5'></i>
                                <input
                                    type='text'
                                    className='form-control ps-5 rounded-pill'
                                    placeholder='Enter job position'
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    required
                                    aria-label='Job search term'
                                />
                            </div>
                            <select
                                className='form-select rounded-pill flex-grow-1'
                                value={jobCategory}
                                onChange={(e) => setJobCategory(e.target.value)}
                                aria-label='Job category'
                            >
                                <option>All Categories</option>
                                <option>IT & Technology</option>
                                <option>Business</option>
                            </select>
                            <select
                                className='form-select rounded-pill flex-grow-1'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                aria-label='Location'
                            >
                                <option>All Locations</option>
                                <option>Ho Chi Minh City</option>
                                <option>Hanoi</option>
                            </select>
                            <button
                                type='submit'
                                className='px-4 btn btn-primary rounded-pill fw-semibold'
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
