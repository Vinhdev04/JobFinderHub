import React from 'react';
import './CareerGuidesSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const careerGuides = [
    {
        title: 'Top 5 việc làm nhà máy điện, thu nhập cao',
        description:
            'Có hội việc làm nhà máy điện ngay hôm nay như thế nào? Nhũng vị trí tuyển dụng việc làm nhà máy điện phổ biến là gì? ...',
        image: 'https://via.placeholder.com/400x250/ff6b6b/ffffff?text=Guide+1'
    },
    {
        title: 'Nhân viên part time là gì? 11 công việc part time lương cao',
        description:
            'Nhân viên part time là gì? Nếu bạn đang quan tâm đến hình thức việc làm này, hãy cùng Vieclam24h.vn tìm hiểu chi tiết ...',
        image: 'https://via.placeholder.com/400x250/4ecdc4/ffffff?text=Guide+2'
    },
    {
        title: 'Nhân viên vận hành máy là gì? Mô tả công việc, mức lương ...',
        description:
            'Nhân viên vận hành máy là gì? Tuyển dụng vị trí này cần những kỹ năng gì? Mức lương ra sao? ...',
        image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Guide+3'
    }
    // Add more...
];

const CareerGuidesSection = () => {
    return (
        <section className='py-5 bg-white career-guides-section'>
            <div className='container'>
                <h2 className='mb-5 text-center fw-bold'>
                    Cẩm nang nghề nghiệp
                </h2>
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
                        Xem thêm cẩm nang
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CareerGuidesSection;
