import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@styles/NotFoundPage.css';

function NotFoundPage() {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className='not-found'>
            <div className='not-found__container'>
                <div className='not-found__content'>
                    {/* 404 Animation */}
                    <div className='not-found__animation'>
                        <div className='not-found__number'>4</div>
                        <div className='not-found__icon'>
                            <svg
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            >
                                <circle cx='12' cy='12' r='10' />
                                <line x1='12' y1='8' x2='12' y2='12' />
                                <line x1='12' y1='16' x2='12.01' y2='16' />
                            </svg>
                        </div>
                        <div className='not-found__number'>4</div>
                    </div>

                    {/* Message */}
                    <h1 className='not-found__title'>Trang không tồn tại</h1>
                    <p className='not-found__description'>
                        Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã
                        bị di chuyển.
                    </p>

                    {/* Actions */}
                    <div className='not-found__actions'>
                        <button
                            onClick={handleGoHome}
                            className='not-found__btn not-found__btn--primary'
                        >
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                            >
                                <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
                                <polyline points='9 22 9 12 15 12 15 22' />
                            </svg>
                            Về trang chủ
                        </button>
                        <button
                            onClick={handleGoBack}
                            className='not-found__btn not-found__btn--secondary'
                        >
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                            >
                                <line x1='19' y1='12' x2='5' y2='12' />
                                <polyline points='12 19 5 12 12 5' />
                            </svg>
                            Quay lại
                        </button>
                    </div>

                    {/* Suggestions */}
                    <div className='not-found__suggestions'>
                        <p className='not-found__suggestions-title'>
                            Có thể bạn muốn:
                        </p>
                        <ul className='not-found__suggestions-list'>
                            <li>
                                <a href='/' className='not-found__link'>
                                    Tìm kiếm việc làm
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/companies'
                                    className='not-found__link'
                                >
                                    Xem danh sách công ty
                                </a>
                            </li>
                            <li>
                                <a
                                    href='/auth/login'
                                    className='not-found__link'
                                >
                                    Đăng nhập tài khoản
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className='not-found__decoration'>
                    <div className='not-found__circle not-found__circle--1'></div>
                    <div className='not-found__circle not-found__circle--2'></div>
                    <div className='not-found__circle not-found__circle--3'></div>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;
