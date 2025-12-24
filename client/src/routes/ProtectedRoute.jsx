// client/src/routes/ProtectedRoute.jsx
// Component bảo vệ route theo authentication và role
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Loader2 } from 'lucide-react';

/**
 * ProtectedRoute - Bảo vệ route yêu cầu đăng nhập
 * @param {ReactNode} children - Component con
 * @param {string|array} allowedRoles - Role được phép truy cập (optional)
 * @param {string} redirectTo - Redirect path nếu không có quyền
 */
function ProtectedRoute({
    children,
    allowedRoles = null,
    redirectTo = '/login'
}) {
    const { user, loading, isAuthenticated } = useAuth();
    const location = useLocation();

    // Đang load auth state
    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <Loader2 size={48} className='spinner' />
            </div>
        );
    }

    // Chưa đăng nhập -> Redirect to login
    if (!isAuthenticated) {
        return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }

    // Kiểm tra role nếu có yêu cầu
    if (allowedRoles) {
        const roles = Array.isArray(allowedRoles)
            ? allowedRoles
            : [allowedRoles];

        if (!roles.includes(user.role)) {
            // Không có quyền truy cập -> Redirect về unauthorized page
            return <Navigate to='/unauthorized' replace />;
        }
    }

    // Cho phép truy cập
    return children;
}

/**
 * PublicRoute - Chỉ cho phép truy cập khi chưa đăng nhập
 * VD: Login, Register page
 */
export function PublicRoute({ children, redirectTo = '/dashboard' }) {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <Loader2 size={48} className='spinner' />
            </div>
        );
    }

    // Đã đăng nhập -> Redirect về dashboard
    if (isAuthenticated) {
        return <Navigate to={redirectTo} replace />;
    }

    return children;
}

/**
 * RoleBasedRoute - Shorthand cho các role cụ thể
 */
export const StudentRoute = ({ children }) => (
    <ProtectedRoute allowedRoles='STUDENT'>{children}</ProtectedRoute>
);

export const RecruiterRoute = ({ children }) => (
    <ProtectedRoute allowedRoles='RECRUITER'>{children}</ProtectedRoute>
);

export const CompanyManagerRoute = ({ children }) => (
    <ProtectedRoute allowedRoles='COMPANY_MANAGER'>{children}</ProtectedRoute>
);

export const InternManagerRoute = ({ children }) => (
    <ProtectedRoute allowedRoles='INTERN_MANAGER'>{children}</ProtectedRoute>
);

export const SysAdminRoute = ({ children }) => (
    <ProtectedRoute allowedRoles='SYS_ADMIN'>{children}</ProtectedRoute>
);

export const RecruiterOrManagerRoute = ({ children }) => (
    <ProtectedRoute allowedRoles={['RECRUITER', 'COMPANY_MANAGER']}>
        {children}
    </ProtectedRoute>
);

export default ProtectedRoute;
