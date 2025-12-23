import React, { useState } from 'react';
import { X } from 'lucide-react';
import LoginForm from '@components/forms/LoginForm';
import RegisterForm from '@components/forms/RegisterForm';
import '../styles/AuthForm.css';

function AuthForm({ onClose }) {
    const [isLogin, setIsLogin] = useState(true);
    const [isClose, setIsClose] = useState(false);

    const closeModalAuth = (e) => {
        setIsClose(() => !isClose);
    };

    return (
        <div className='auth-form'>
            <div className='auth-form__overlay' onClick={onClose}></div>

            <div className='auth-form__modal'>
                <button
                    className='auth-form__close-btn'
                    onClick={closeModalAuth}
                >
                    <X size={24} />
                </button>

                <div className='auth-form__form-section'>
                    {isLogin ? (
                        <LoginForm
                            onSwitchToRegister={() => setIsLogin(false)}
                        />
                    ) : (
                        <RegisterForm
                            onSwitchToLogin={() => setIsLogin(true)}
                        />
                    )}
                </div>

                <div className='auth-form__promo-section'>
                    <div className='auth-form__promo-content'>
                        <div className='auth-form__logo'>
                            <svg width='140' height='32' viewBox='0 0 140 32'>
                                <circle cx='10' cy='10' r='4' fill='#7C3AED' />
                                <circle cx='16' cy='10' r='4' fill='#7C3AED' />
                                <circle cx='22' cy='10' r='4' fill='#7C3AED' />
                                <text
                                    x='0'
                                    y='26'
                                    fill='#7C3AED'
                                    fontSize='16'
                                    fontWeight='700'
                                >
                                    JobFinderHub
                                </text>
                            </svg>
                        </div>

                        <div className='auth-form__badge'>
                            <div className='auth-form__badge-text'>
                                ỨNG TUYỂN 1 CHẠM
                            </div>
                            <div className='auth-form__badge-text'>
                                MỌI LÚC MỌI NƠI
                            </div>
                        </div>

                        <div className='auth-form__phone'>
                            <div className='auth-form__phone-frame'>
                                <div className='auth-form__phone-notch'></div>
                                <div className='auth-form__phone-screen'>
                                    <div className='auth-form__phone-header'>
                                        <span className='auth-form__phone-time'>
                                            9:41
                                        </span>
                                        <div className='auth-form__phone-icons'>
                                            <div className='auth-form__signal-icon'></div>
                                            <div className='auth-form__wifi-icon'></div>
                                            <div className='auth-form__battery-icon'></div>
                                        </div>
                                    </div>

                                    <div className='auth-form__phone-content'>
                                        <div className='auth-form__profile-card'>
                                            <div className='auth-form__avatar'></div>
                                            <div className='auth-form__profile-info'>
                                                <div className='auth-form__profile-line'></div>
                                                <div className='auth-form__profile-line auth-form__profile-line--short'></div>
                                                <div className='auth-form__profile-line auth-form__profile-line--mini'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='auth-form__hand-pointer'></div>
                        </div>

                        <div className='auth-form__features'>
                            <div className='auth-form__feature'>
                                <span className='auth-form__feature-icon'>
                                    ⏱️
                                </span>
                                <span className='auth-form__feature-text'>
                                    12+triệu
                                </span>
                            </div>
                            <div className='auth-form__feature'>
                                <span className='auth-form__feature-icon'>
                                    📍
                                </span>
                                <span className='auth-form__feature-text'>
                                    {' '}
                                    TPHCM,12/Quý
                                </span>
                            </div>
                            <div className='auth-form__feature'>
                                <span className='auth-form__feature-icon'>
                                    ⏰
                                </span>
                                <span className='auth-form__feature-text'>
                                    Trực tuần
                                </span>
                            </div>
                        </div>

                        <div className='auth-form__qr-section'>
                            <div className='auth-form__qr-code'>
                                <div className='auth-form__qr-pattern'></div>
                            </div>
                        </div>

                        <div className='auth-form__store-badges'>
                            <div className='auth-form__store-badge'>
                                <span className='auth-form__store-label'>
                                    GET IT ON
                                </span>
                                <span className='auth-form__store-name'>
                                    Google Play
                                </span>
                            </div>
                            <div className='auth-form__store-badge'>
                                <span className='auth-form__store-label'>
                                    Download on the
                                </span>
                                <span className='auth-form__store-name'>
                                    App Store
                                </span>
                            </div>
                        </div>

                        <div className='auth-form__cta-text'>ỨNG TUYỂN</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;
