import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '../src/assets/css/theme.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes/routes.config';
import { AuthProvider } from './features/auth/context/AuthContext.jsx';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
);
