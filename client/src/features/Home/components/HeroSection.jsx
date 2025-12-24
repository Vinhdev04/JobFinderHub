import React, { useState } from 'react';
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const HeroSection = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [jobCategory, setJobCategory] = useState('Tất cả nghề nghiệp');
    const [location, setLocation] = useState('Tất cả tỉnh thành');

    return (
        <section className='hero-section animate__animated animate__fadeIn'>
            <div className='container'>
                <div className='mb-5 text-center'>
                    <h1 className='text-white display-3 fw-bold'>
                        Tìm Việc Làm Mơ Ước Của Bạn
                    </h1>
                    <p className='lead text-white-50'>
                        Hàng nghìn cơ hội việc làm đang chờ đón bạn
                    </p>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-lg-8'>
                        <form className='flex-wrap gap-2 p-3 bg-white shadow-lg search-form d-flex rounded-5'>
                            <div className='flex-grow-1 position-relative'>
                                <i className='bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-primary fs-5'></i>
                                <input
                                    type='text'
                                    className='form-control ps-5 rounded-pill'
                                    placeholder='Nhập vị trí muốn ứng tuyển'
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                />
                            </div>
                            <select
                                className='form-select rounded-pill flex-grow-1'
                                value={jobCategory}
                                onChange={(e) => setJobCategory(e.target.value)}
                            >
                                <option>Tất cả nghề nghiệp</option>
                                <option>Công nghệ thông tin</option>
                                <option>Kinh doanh</option>
                            </select>
                            <select
                                className='form-select rounded-pill flex-grow-1'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                <option>Tất cả tỉnh thành</option>
                                <option>TP. Hồ Chí Minh</option>
                                <option>Hà Nội</option>
                            </select>
                            <button
                                type='submit'
                                className='px-4 btn btn-primary rounded-pill fw-semibold'
                            >
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
