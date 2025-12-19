```


# KIẾN TRÚC FOLDER CẢI TIẾN - JOBFINDERHUB (MERN + PRISMA)

## 📁 CLIENT STRUCTURE (ReactJS + Vite/CRA)
```

client/
├── public/
│ ├── assets/
│ │ ├── images/
│ │ ├── icons/
│ │ └── fonts/
│ └── favicon.ico
│
├── src/
│ ├── api/ # API Service Layer
│ │ ├── axiosConfig.js # Axios instance với interceptors
│ │ ├── authApi.js # Auth endpoints
│ │ ├── jobsApi.js # Jobs CRUD
│ │ ├── applicationsApi.js
│ │ ├── companiesApi.js
│ │ ├── notificationsApi.js
│ │ └── socketConfig.js # Socket.io client config
│ │
│ ├── components/ # Reusable Components
│ │ ├── common/
│ │ │ ├── Button/
│ │ │ │ ├── Button.jsx
│ │ │ │ └── Button.module.css
│ │ │ ├── Input/
│ │ │ ├── Modal/
│ │ │ ├── Card/
│ │ │ ├── Badge/
│ │ │ ├── Avatar/
│ │ │ └── LoadingSpinner/
│ │ ├── layout/
│ │ │ ├── Header/
│ │ │ │ ├── Header.jsx
│ │ │ │ ├── Navbar.jsx
│ │ │ │ └── UserMenu.jsx
│ │ │ ├── Footer/
│ │ │ ├── Sidebar/
│ │ │ └── MainLayout.jsx
│ │ └── forms/
│ │ ├── LoginForm.jsx
│ │ ├── RegisterForm.jsx
│ │ ├── JobPostForm.jsx
│ │ └── ApplicationForm.jsx
│ │
│ ├── features/ # Feature Modules
│ │ ├── auth/
│ │ │ ├── components/
│ │ │ │ ├── GoogleLoginButton.jsx
│ │ │ │ ├── GithubLoginButton.jsx
│ │ │ │ └── SocialAuthCallback.jsx
│ │ │ ├── hooks/
│ │ │ │ └── useAuth.js
│ │ │ ├── context/
│ │ │ │ └── AuthContext.jsx
│ │ │ └── utils/
│ │ │ └── authHelpers.js
│ │ │
│ │ ├── jobs/
│ │ │ ├── components/
│ │ │ │ ├── JobCard.jsx
│ │ │ │ ├── JobDetail.jsx
│ │ │ │ ├── JobFilters.jsx
│ │ │ │ ├── JobList.jsx
│ │ │ │ └── JobSearch.jsx
│ │ │ ├── hooks/
│ │ │ │ ├── useJobs.js
│ │ │ │ └── useJobFilters.js
│ │ │ └── pages/
│ │ │ ├── JobsPage.jsx
│ │ │ ├── JobDetailPage.jsx
│ │ │ └── CreateJobPage.jsx
│ │ │
│ │ ├── applications/
│ │ │ ├── components/
│ │ │ │ ├── ApplicationCard.jsx
│ │ │ │ ├── ApplicationStatus.jsx
│ │ │ │ └── ApplicationTimeline.jsx
│ │ │ ├── hooks/
│ │ │ │ └── useApplications.js
│ │ │ └── pages/
│ │ │ ├── MyApplicationsPage.jsx
│ │ │ └── ApplicationDetailPage.jsx
│ │ │
│ │ ├── profile/
│ │ │ ├── components/
│ │ │ │ ├── ProfileForm.jsx
│ │ │ │ ├── CVUpload.jsx
│ │ │ │ └── PortfolioSection.jsx
│ │ │ └── pages/
│ │ │ └── ProfilePage.jsx
│ │ │
│ │ ├── company/
│ │ │ ├── components/
│ │ │ │ ├── CompanyProfile.jsx
│ │ │ │ ├── RecruiterList.jsx
│ │ │ │ └── CompanyStats.jsx
│ │ │ └── pages/
│ │ │ ├── CompanyDashboard.jsx
│ │ │ └── ManageRecruitersPage.jsx
│ │ │
│ │ ├── chat/
│ │ │ ├── components/
│ │ │ │ ├── ChatBox.jsx
│ │ │ │ ├── MessageList.jsx
│ │ │ │ ├── MessageInput.jsx
│ │ │ │ └── UserList.jsx
│ │ │ ├── hooks/
│ │ │ │ └── useChat.js
│ │ │ └── pages/
│ │ │ └── ChatPage.jsx
│ │ │
│ │ ├── notifications/
│ │ │ ├── components/
│ │ │ │ ├── NotificationBell.jsx
│ │ │ │ ├── NotificationItem.jsx
│ │ │ │ └── NotificationList.jsx
│ │ │ └── hooks/
│ │ │ └── useNotifications.js
│ │ │
│ │ └── admin/
│ │ ├── components/
│ │ │ ├── AdminSidebar.jsx
│ │ │ ├── AuditLogTable.jsx
│ │ │ └── SystemStats.jsx
│ │ └── pages/
│ │ ├── AdminDashboard.jsx
│ │ ├── ManageJobsPage.jsx
│ │ └── AuditLogsPage.jsx
│ │
│ ├── hooks/ # Global Custom Hooks
│ │ ├── useDebounce.js
│ │ ├── useLocalStorage.js
│ │ ├── useSocket.js
│ │ └── useInfiniteScroll.js
│ │
│ ├── context/ # Global Context
│ │ ├── ThemeContext.jsx
│ │ └── SocketContext.jsx
│ │
│ ├── pages/ # Top-level Pages
│ │ ├── HomePage.jsx
│ │ ├── LoginPage.jsx
│ │ ├── RegisterPage.jsx
│ │ ├── NotFoundPage.jsx
│ │ └── UnauthorizedPage.jsx
│ │
│ ├── routes/ # Routing Config
│ │ ├── index.jsx # Main router
│ │ ├── ProtectedRoute.jsx # Auth guard
│ │ └── RoleBasedRoute.jsx # Role guard
│ │
│ ├── utils/ # Utility Functions
│ │ ├── formatDate.js
│ │ ├── validation.js
│ │ ├── constants.js
│ │ └── helpers.js
│ │
│ ├── constants/ # App Constants
│ │ ├── roles.js # USER_ROLES enum
│ │ ├── status.js # JOB_STATUS, APP_STATUS
│ │ └── apiEndpoints.js # API URLs
│ │
│ ├── styles/ # Global Styles
│ │ ├── index.css
│ │ ├── tailwind.css
│ │ └── variables.css
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── vite.config.js
│
├── .env.example
├── .gitignore
├── package.json
└── tailwind.config.js

## 🗄️ SERVER STRUCTURE (Node.js + Express + Prisma)

```
server/
├── prisma/
│   ├── schema.prisma           # Database Schema (MongoDB)
│   ├── seed.js                 # Database Seeder
│   └── migrations/             # Migration files
│
├── src/
│   ├── config/                 # Configuration Files
│   │   ├── database.js         # Prisma Client instance
│   │   ├── jwt.js              # JWT config
│   │   ├── passport.js         # Passport strategies
│   │   │   ├── googleStrategy.js
│   │   │   └── githubStrategy.js
│   │   ├── socket.js           # Socket.io config
│   │   └── cloudinary.js       # File upload config
│   │
│   ├── controllers/            # Request Handlers
│   │   ├── authController.js
│   │   │   ├── register()
│   │   │   ├── login()
│   │   │   ├── googleAuth()
│   │   │   ├── githubAuth()
│   │   │   └── logout()
│   │   ├── jobController.js
│   │   │   ├── createJob()
│   │   │   ├── getAllJobs()
│   │   │   ├── getJobById()
│   │   │   ├── updateJob()
│   │   │   └── deleteJob()
│   │   ├── applicationController.js
│   │   ├── userController.js
│   │   ├── companyController.js
│   │   ├── notificationController.js
│   │   └── adminController.js
│   │
│   ├── models/                 # Prisma Models (schema.prisma)
│   │   └── README.md           # Reference to schema.prisma
│   │
│   ├── routes/                 # API Routes
│   │   ├── index.js            # Main router
│   │   ├── authRoutes.js
│   │   │   ├── POST /register
│   │   │   ├── POST /login
│   │   │   ├── GET /google
│   │   │   ├── GET /google/callback
│   │   │   ├── GET /github
│   │   │   └── GET /github/callback
│   │   ├── jobRoutes.js
│   │   │   ├── GET /jobs
│   │   │   ├── GET /jobs/:id
│   │   │   ├── POST /jobs (Recruiter)
│   │   │   ├── PUT /jobs/:id (Recruiter)
│   │   │   ├── DELETE /jobs/:id (Admin)
│   │   │   └── PATCH /jobs/:id/approve (InternManager)
│   │   ├── applicationRoutes.js
│   │   ├── userRoutes.js
│   │   ├── companyRoutes.js
│   │   ├── chatRoutes.js
│   │   └── adminRoutes.js
│   │
│   ├── middlewares/            # Express Middlewares
│   │   ├── authMiddleware.js   # JWT verification
│   │   ├── roleMiddleware.js   # RBAC check
│   │   │   ├── isStudent()
│   │   │   ├── isRecruiter()
│   │   │   ├── isCompanyManager()
│   │   │   ├── isInternManager()
│   │   │   └── isSysAdmin()
│   │   ├── errorHandler.js     # Global error handler
│   │   ├── validateRequest.js  # Request validation
│   │   ├── rateLimiter.js      # Rate limiting
│   │   └── upload.js           # File upload (Multer)
│   │
│   ├── services/               # Business Logic
│   │   ├── authService.js
│   │   │   ├── registerUser()
│   │   │   ├── loginUser()
│   │   │   ├── generateToken()
│   │   │   └── verifyToken()
│   │   ├── jobService.js
│   │   │   ├── createJob()
│   │   │   ├── getJobsWithFilters()
│   │   │   ├── approveJob()
│   │   │   └── rejectJob()
│   │   ├── applicationService.js
│   │   ├── emailService.js     # Email notifications
│   │   ├── notificationService.js
│   │   └── auditLogService.js
│   │
│   ├── validators/             # Request Validation Schemas
│   │   ├── authValidator.js    # Joi/Zod schemas
│   │   ├── jobValidator.js
│   │   ├── applicationValidator.js
│   │   └── userValidator.js
│   │
│   ├── utils/                  # Utility Functions
│   │   ├── logger.js           # Winston logger
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── emailTemplates.js
│   │
│   ├── sockets/                # Socket.io Handlers
│   │   ├── index.js            # Socket server setup
│   │   ├── chatHandler.js      # Real-time chat
│   │   ├── notificationHandler.js
│   │   └── presenceHandler.js  # Online/offline status
│   │
│   ├── app.js                  # Express App Setup
│   └── server.js               # Server Entry Point
│
├── .env.example
├── .gitignore
├── package.json
└── README.md


## 🔑 CẢI TIẾN CHỦ YẾU

### 1. CLIENT
- ✅ Tách biệt rõ ràng giữa `components` (UI) và `features` (logic)
- ✅ Thêm `constants/` cho các enums và config
- ✅ Thêm `routes/` với ProtectedRoute và RoleBasedRoute
- ✅ Thêm `context/` cho global state (Auth, Socket, Theme)
- ✅ `features/` chứa đầy đủ: components, hooks, pages, context

### 2. SERVER
- ✅ Prisma ORM với MongoDB
- ✅ Tách biệt `controllers` (HTTP handlers) và `services` (business logic)
- ✅ `validators/` cho request validation (Joi/Zod)
- ✅ `middlewares/` với auth, role-based access, error handling
- ✅ `sockets/` cho realtime features riêng biệt
- ✅ `config/passport.js` cho Google/Github OAuth

### 3. SECURITY & BEST PRACTICES
- ✅ JWT authentication
- ✅ Role-based access control (5 roles)
- ✅ Audit logging
- ✅ Rate limiting
- ✅ Request validation
- ✅ Error handling middleware
```

```

```

---

```

/**
 * API ENDPOINTS DESIGN - JOBFINDERHUB
 * Base URL: http://localhost:5000/api/v1
 * Authentication: JWT Bearer Token
 */

// ============================================
// 1. AUTHENTICATION & AUTHORIZATION
// ============================================

/**
 * @route   POST /api/v1/auth/register
 * @desc    Register new user
 * @access  Public
 * @body    { email, password, fullName, role, phone? }
 */

/**
 * @route   POST /api/v1/auth/login
 * @desc    Login user (traditional)
 * @access  Public
 * @body    { email, password }
 * @return  { token, user }
 */

/**
 * @route   GET /api/v1/auth/google
 * @desc    Redirect to Google OAuth
 * @access  Public
 */

/**
 * @route   GET /api/v1/auth/google/callback
 * @desc    Google OAuth callback
 * @access  Public
 * @return  Redirect to frontend with token
 */

/**
 * @route   GET /api/v1/auth/github
 * @desc    Redirect to Github OAuth
 * @access  Public
 */

/**
 * @route   GET /api/v1/auth/github/callback
 * @desc    Github OAuth callback
 * @access  Public
 * @return  Redirect to frontend with token
 */

/**
 * @route   POST /api/v1/auth/logout
 * @desc    Logout user (clear token)
 * @access  Private
 */

/**
 * @route   GET /api/v1/auth/me
 * @desc    Get current user profile
 * @access  Private
 * @return  { user, profile }
 */

/**
 * @route   POST /api/v1/auth/refresh-token
 * @desc    Refresh access token
 * @access  Public (with refresh token)
 * @body    { refreshToken }
 */

// ============================================
// 2. JOBS MANAGEMENT
// ============================================

/**
 * @route   GET /api/v1/jobs
 * @desc    Get all jobs with filters
 * @access  Public
 * @query   ?status=APPROVED&location=HCM&jobType=Internship&page=1&limit=10
 * @return  { jobs: [], pagination: {} }
 */

/**
 * @route   GET /api/v1/jobs/:id
 * @desc    Get single job details
 * @access  Public
 * @return  { job }
 */

/**
 * @route   POST /api/v1/jobs
 * @desc    Create new job posting
 * @access  Private (Recruiter only)
 * @body    { title, description, requirements, salaryMin, salaryMax, location, ... }
 * @return  { job } (status: PENDING_INTERNAL)
 */

/**
 * @route   PUT /api/v1/jobs/:id
 * @desc    Update job posting
 * @access  Private (Recruiter - owner only)
 * @body    { title?, description?, ... }
 */

/**
 * @route   DELETE /api/v1/jobs/:id
 * @desc    Delete job posting
 * @access  Private (Recruiter - owner OR Admin)
 */

/**
 * @route   PATCH /api/v1/jobs/:id/approve-internal
 * @desc    Company Manager approves job
 * @access  Private (Company Manager only)
 * @return  { job } (status: PENDING_SCHOOL)
 */

/**
 * @route   PATCH /api/v1/jobs/:id/approve-school
 * @desc    Intern Manager approves job
 * @access  Private (Intern Manager only)
 * @return  { job } (status: APPROVED)
 */

/**
 * @route   PATCH /api/v1/jobs/:id/reject
 * @desc    Reject job posting
 * @access  Private (Company Manager OR Intern Manager)
 * @body    { rejectionReason }
 * @return  { job } (status: REJECTED)
 */

/**
 * @route   PATCH /api/v1/jobs/:id/close
 * @desc    Close job posting (no longer accepting applications)
 * @access  Private (Recruiter - owner OR Company Manager)
 * @return  { job } (status: CLOSED)
 */

/**
 * @route   GET /api/v1/jobs/:id/applications
 * @desc    Get all applications for a job
 * @access  Private (Recruiter - owner OR Company Manager)
 * @return  { applications: [] }
 */

// ============================================
// 3. APPLICATIONS MANAGEMENT
// ============================================

/**
 * @route   GET /api/v1/applications
 * @desc    Get user's applications
 * @access  Private (Student)
 * @query   ?status=PENDING&page=1&limit=10
 * @return  { applications: [], pagination: {} }
 */

/**
 * @route   GET /api/v1/applications/:id
 * @desc    Get single application details
 * @access  Private (Student - owner OR Recruiter)
 * @return  { application }
 */

/**
 * @route   POST /api/v1/applications
 * @desc    Submit job application
 * @access  Private (Student only)
 * @body    { jobId, cvUrl, coverLetter?, portfolioUrl? }
 * @return  { application }
 */

/**
 * @route   PUT /api/v1/applications/:id
 * @desc    Update application (before reviewed)
 * @access  Private (Student - owner, status: PENDING only)
 * @body    { cvUrl?, coverLetter?, portfolioUrl? }
 */

/**
 * @route   DELETE /api/v1/applications/:id
 * @desc    Withdraw application
 * @access  Private (Student - owner)
 */

/**
 * @route   PATCH /api/v1/applications/:id/view
 * @desc    Mark application as viewed
 * @access  Private (Recruiter)
 * @return  { application } (status: VIEWED)
 */

/**
 * @route   PATCH /api/v1/applications/:id/schedule-interview
 * @desc    Schedule interview
 * @access  Private (Recruiter)
 * @body    { interviewDate, interviewLocation, interviewNotes? }
 * @return  { application } (status: INTERVIEW_SCHEDULED)
 */

/**
 * @route   PATCH /api/v1/applications/:id/offer
 * @desc    Send job offer
 * @access  Private (Recruiter OR Company Manager)
 * @body    { feedback? }
 * @return  { application } (status: OFFERED)
 */

/**
 * @route   PATCH /api/v1/applications/:id/reject
 * @desc    Reject application
 * @access  Private (Recruiter)
 * @body    { feedback? }
 * @return  { application } (status: REJECTED)
 */

// ============================================
// 4. USER PROFILE MANAGEMENT
// ============================================

/**
 * @route   GET /api/v1/users/profile
 * @desc    Get current user profile (auto-detect role)
 * @access  Private
 * @return  { user, studentProfile? | recruiterProfile? }
 */

/**
 * @route   PUT /api/v1/users/profile
 * @desc    Update user profile
 * @access  Private
 * @body    { fullName?, phone?, avatar? }
 */

/**
 * @route   PUT /api/v1/users/profile/student
 * @desc    Update student profile
 * @access  Private (Student only)
 * @body    { studentId?, university?, major?, skills: [], ... }
 */

/**
 * @route   POST /api/v1/users/upload-cv
 * @desc    Upload CV file
 * @access  Private (Student only)
 * @body    FormData (file: cv.pdf)
 * @return  { cvUrl }
 */

/**
 * @route   POST /api/v1/users/upload-avatar
 * @desc    Upload avatar
 * @access  Private
 * @body    FormData (file: avatar.jpg)
 * @return  { avatarUrl }
 */

// ============================================
// 5. COMPANY MANAGEMENT
// ============================================

/**
 * @route   GET /api/v1/companies
 * @desc    Get all companies
 * @access  Public
 * @query   ?verificationStatus=VERIFIED&page=1&limit=10
 * @return  { companies: [], pagination: {} }
 */

/**
 * @route   GET /api/v1/companies/:id
 * @desc    Get company details
 * @access  Public
 * @return  { company, jobs: [] }
 */

/**
 * @route   POST /api/v1/companies
 * @desc    Register new company
 * @access  Private (Company Manager only)
 * @body    { companyName, taxCode, address, description, ... }
 * @return  { company } (status: PENDING)
 */

/**
 * @route   PUT /api/v1/companies/:id
 * @desc    Update company info
 * @access  Private (Company Manager - owner only)
 * @body    { companyName?, address?, description?, ... }
 */

/**
 * @route   PATCH /api/v1/companies/:id/verify
 * @desc    Verify company
 * @access  Private (Intern Manager OR Sys Admin)
 * @return  { company } (status: VERIFIED)
 */

/**
 * @route   GET /api/v1/companies/:id/recruiters
 * @desc    Get company's recruiters
 * @access  Private (Company Manager - owner only)
 * @return  { recruiters: [] }
 */

/**
 * @route   POST /api/v1/companies/:id/recruiters
 * @desc    Add recruiter to company
 * @access  Private (Company Manager - owner only)
 * @body    { email, fullName, position?, department? }
 * @return  { recruiter }
 */

/**
 * @route   PATCH /api/v1/companies/:id/recruiters/:recruiterId/deactivate
 * @desc    Deactivate recruiter
 * @access  Private (Company Manager - owner only)
 * @return  { recruiter } (isActive: false)
 */

// ============================================
// 6. CHAT & MESSAGING
// ============================================

/**
 * @route   GET /api/v1/messages
 * @desc    Get conversation list
 * @access  Private
 * @return  { conversations: [{ user, lastMessage, unreadCount }] }
 */

/**
 * @route   GET /api/v1/messages/:userId
 * @desc    Get messages with specific user
 * @access  Private
 * @query   ?page=1&limit=50
 * @return  { messages: [], pagination: {} }
 */

/**
 * @route   POST /api/v1/messages
 * @desc    Send message
 * @access  Private
 * @body    { receiverId, content }
 * @return  { message }
 */

/**
 * @route   PATCH /api/v1/messages/:id/read
 * @desc    Mark message as read
 * @access  Private
 * @return  { message }
 */

// ============================================
// 7. NOTIFICATIONS
// ============================================

/**
 * @route   GET /api/v1/notifications
 * @desc    Get user notifications
 * @access  Private
 * @query   ?isRead=false&page=1&limit=20
 * @return  { notifications: [], pagination: {}, unreadCount }
 */

/**
 * @route   PATCH /api/v1/notifications/:id/read
 * @desc    Mark notification as read
 * @access  Private
 * @return  { notification }
 */

/**
 * @route   PATCH /api/v1/notifications/read-all
 * @desc    Mark all notifications as read
 * @access  Private
 * @return  { success: true }
 */

/**
 * @route   DELETE /api/v1/notifications/:id
 * @desc    Delete notification
 * @access  Private
 */

// ============================================
// 8. ADMIN & AUDIT LOGS
// ============================================

/**
 * @route   GET /api/v1/admin/users
 * @desc    Get all users (with filters)
 * @access  Private (Sys Admin only)
 * @query   ?role=STUDENT&isActive=true&page=1&limit=50
 * @return  { users: [], pagination: {} }
 */

/**
 * @route   PATCH /api/v1/admin/users/:id/deactivate
 * @desc    Deactivate user account
 * @access  Private (Sys Admin OR Intern Manager)
 * @body    { reason }
 * @return  { user } (isActive: false)
 */

/**
 * @route   GET /api/v1/admin/audit-logs
 * @desc    Get audit logs
 * @access  Private (Sys Admin OR Intern Manager)
 * @query   ?actorId=xxx&actionType=DELETE_USER&page=1&limit=50
 * @return  { logs: [], pagination: {} }
 */

/**
 * @route   GET /api/v1/admin/stats
 * @desc    Get system statistics
 * @access  Private (Sys Admin OR Intern Manager)
 * @return  { totalUsers, totalJobs, totalApplications, ... }
 */

/**
 * @route   GET /api/v1/admin/jobs/pending
 * @desc    Get jobs pending school approval
 * @access  Private (Intern Manager only)
 * @return  { jobs: [] }
 */

// ============================================
// 9. SOCKET.IO EVENTS (Real-time)
// ============================================

/**
 * Event: connection
 * Desc: User connects to socket
 * Emit: { userId }
 */

/**
 * Event: disconnect
 * Desc: User disconnects
 */

/**
 * Event: send_message
 * Desc: Send real-time message
 * Data: { receiverId, content }
 * Broadcast: new_message -> receiver
 */

/**
 * Event: typing
 * Desc: User is typing
 * Data: { receiverId }
 * Broadcast: user_typing -> receiver
 */

/**
 * Event: notification
 * Desc: Server sends notification to user
 * Broadcast: new_notification -> specific user
 */

/**
 * Event: job_status_changed
 * Desc: Job status updated
 * Broadcast: job_updated -> recruiter
 */

/**
 * Event: application_status_changed
 * Desc: Application status updated
 * Broadcast: application_updated -> student
 */

// ============================================
// MIDDLEWARE CHAIN EXAMPLES
// ============================================

// Example 1: Protected route
// Route: POST /api/v1/jobs
// Chain: authMiddleware -> isRecruiter -> validateJobSchema -> jobController.createJob

// Example 2: Role-based access
// Route: PATCH /api/v1/jobs/:id/approve-school
// Chain: authMiddleware -> isInternManager -> jobController.approveBySchool

// Example 3: Resource ownership check
// Route: PUT /api/v1/jobs/:id
// Chain: authMiddleware -> isRecruiter -> checkJobOwnership -> jobController.updateJob

// ============================================
// ERROR RESPONSE FORMAT
// ============================================
/**
 * Standard Error Response:
 * {
 *   success: false,
 *   error: {
 *     message: "Error message",
 *     code: "ERROR_CODE",
 *     statusCode: 400,
 *     details?: {}
 *   }
 * }
 */

// ============================================
// SUCCESS RESPONSE FORMAT
// ============================================
/**
 * Standard Success Response:
 * {
 *   success: true,
 *   data: {},
 *   message?: "Success message",
 *   pagination?: {
 *     currentPage: 1,
 *     totalPages: 10,
 *     totalItems: 100,
 *     limit: 10
 *   }
 * }
 */
```

---

`ERD Diagram - JobFinderHub`

![ERD Diagram - JobFinderHub](https://www.mermaidchart.com/play?utm_source=mermaid_live_editor&utm_medium=share#pako:eNqrVkrOT0lVslJSqgUAFW4DVg)
