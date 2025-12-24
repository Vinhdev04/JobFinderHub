import React from 'react';
import './CategoriesSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

const categories = [
    { icon: 'bi bi-bag-fill', label: 'Bán sỉ - Bán lẻ - Quản lý cửa hàng' },
    { icon: 'bi bi-cart-fill', label: 'Bán hàng - Kinh doanh' },
    { icon: 'bi bi-megaphone-fill', label: 'Marketing' },
    { icon: 'bi bi-gear-fill', label: 'Khoa học - Kỹ thuật' },
    { icon: 'bi bi-calculator-fill', label: 'Kiểm toán' }
];

const CategoriesSection = () => {
    return (
        <section className='py-5 bg-white categories-section'>
            <div className='container'>
                <h2 className='mb-5 text-center fw-bold'>
                    Danh mục ngành nghề
                </h2>
                <div className='row g-4'>
                    {categories.map((cat, index) => (
                        <div key={index} className='col-md-4 col-lg-2'>
                            <div
                                className='p-4 text-center border-0 shadow-sm card category-card h-100 animate__animated animate__fadeInUp'
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <i
                                    className={`${cat.icon} fs-1 text-primary mb-3`}
                                ></i>
                                <p className='mb-0 fw-medium'>{cat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-4 text-center'>
                    <a
                        href='#'
                        className='btn btn-outline-primary rounded-pill'
                    >
                        Tất cả các ngành <i className='bi bi-chevron-right'></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;
