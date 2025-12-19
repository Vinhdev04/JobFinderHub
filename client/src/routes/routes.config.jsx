// routes/routes.config.jsx (ĐÃ SỬA)

import Home from '../pages/Home';
import DefaultLayout from '../components/layout/DefaultLayout';
import HomePage from '../pages/Home';
import Auth from '../pages/Auth';

const routes = [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                element: <HomePage />,
                index: true,
                name: 'Home'
            },
            {
                path: '/about',
                element: <HomePage />,
                name: 'About'
            },
            {
                path: '/auth/login',
                element: <Auth />,
                name: 'Login'
            }
        ]
    }
];

export default routes;
