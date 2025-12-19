const authorize = (...allowedRoles) => {
    return (req, res, next) => {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          error: { message: 'Not authenticated' }
        });
      }
  
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          error: { 
            message: 'Forbidden: You do not have permission to access this resource' 
          }
        });
      }
  
      next();
    };
  };
  
  // Helper functions
  const isStudent = authorize('STUDENT');
  const isRecruiter = authorize('RECRUITER');
  const isCompanyManager = authorize('COMPANY_MANAGER');
  const isInternManager = authorize('INTERN_MANAGER');
  const isSysAdmin = authorize('SYS_ADMIN');
  const isRecruiterOrManager = authorize('RECRUITER', 'COMPANY_MANAGER');
  
  module.exports = {
    authorize,
    isStudent,
    isRecruiter,
    isCompanyManager,
    isInternManager,
    isSysAdmin,
    isRecruiterOrManager,
  };