// routes/routes.config.jsx

import DefaultLayout from '@components/layout/DefaultLayout';
import HomePage from '@pages/Home';
import LoginPage from '@pages/LoginPage';
import RegisterPage from '@pages/RegisterPage';
import NotFoundPage from '@pages/NotFoundPage';

const routes = [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
                name: 'Home'
            },
            {
                path: 'auth/login',
                element: <LoginPage />,
                name: 'Login'
            },
            {
                path: 'auth/register',
                element: <RegisterPage />,
                name: 'Register'
            },
            // 404 - Must be last
            {
                path: '*',
                element: <NotFoundPage />,
                name: 'NotFound'
            }
        ]
    }
];

export default routes;
