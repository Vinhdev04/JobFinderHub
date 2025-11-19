# File Tree: JobFinderHub

**Generated:** 11/19/2025, 9:02:00 PM
**Root Path:** `c:\JobFinderHub`

```
├── 📁 .qodo                        # Thư mục dành cho QodoAI (tự sinh workflow, automation)
│   ├── 📁 agents                   # Định nghĩa các "agent" dành cho automation
│   └── 📁 workflows                # Luồng xử lý tự động hóa, CI/CD nội bộ
│
├── 📁 client                       # Ứng dụng Frontend (React + Vite)
│   ├── 📁 public                   # Tài nguyên tĩnh không biên dịch (index.html, favicon,...)
│   │   └── 🖼️ vite.svg
│   │
│   ├── 📁 src                      # Toàn bộ source code React
│   │   ├── 📁 api                  # Modules/API helper → Axios instance, gọi HTTP request
│   │   ├── 📁 assets               # Hình ảnh, font, icon — được import vào code
│   │   │   ├── 📁 fonts
│   │   │   ├── 📁 icons
│   │   │   ├── 📁 images
│   │   │   └── 🖼️ react.svg
│   │   │
│   │   ├── 📁 components           # Các UI component nhỏ, tái sử dụng nhiều lần
│   │   ├── 📁 contexts             # Context API → quản lý state global (Auth, Theme,…)
│   │   │   └── 📄 AuthContext.js
│   │   │
│   │   ├── 📁 features             # Từng module hoàn chỉnh theo tính năng (feature-based)
│   │   │   ├── 📁 AdminDashboard   # Giao diện + logic dành cho Admin
│   │   │   ├── 📁 Auth             # Login, Register, Forgot Password
│   │   │   ├── 📁 Home             # Trang chủ
│   │   │   ├── 📁 JobFinder        # Listing + xem chi tiết + lọc công việc
│   │   │   └── 📁 UserProfile      # Hồ sơ cá nhân, update, lịch sử ứng tuyển
│   │   │
│   │   ├── 📁 hooks                # Custom Hooks — chia nhỏ logic tái dùng
│   │   │   └── 📄 useRealtime.js   # Hook WebSocket/Socket.io (Realtime)
│   │   │
│   │   ├── 📁 pages                # Các page được render qua React Router
│   │   ├── 📁 routes               # Config và bảo vệ route (PrivateRoute, Role-Based Route)
│   │   │   └── 📄 routes.config.js
│   │   │
│   │   ├── 📁 shared               # Component layout dùng chung toàn app
│   │   │   ├── 📁 BackToTop
│   │   │   ├── 📁 ContactMe
│   │   │   ├── 📁 Footer
│   │   │   └── 📁 Navbar
│   │   │
│   │   ├── 📁 styles               # CSS toàn cục, theme, biến màu
│   │   ├── 📁 utils                # Hàm helper nhỏ (formatDate, storage, validate,…)
│   │   │
│   │   ├── 🎨 App.css              # Styling tổng thể cho App
│   │   ├── 📄 App.jsx              # Component Root — chứa Router
│   │   ├── 🎨 index.css            # CSS gốc (reset, global)
│   │   └── 📄 main.jsx             # Entry point Render React DOM
│   │
│   ├── ⚙️ .gitignore               # File bỏ qua của Git
│   ├── 📝 README.md                # Tài liệu hướng dẫn Frontend
│   ├── 📄 eslint.config.js         # ESLint rules
│   ├── 🌐 index.html               # HTML template chính
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   └── 📄 vite.config.js           # Cấu hình Vite
│
├── 📁 server                       # Backend (Node.js + Express + MongoDB)
│   ├── 📁 config                   # Cấu hình hệ thống
│   │   ├── 📄 constants.js         # Hằng số chung (User roles, Status,…)
│   │   └── 📄 db.js                # File kết nối MongoDB (Mongoose)
│   │
│   ├── 📁 controllers              # Xử lý request → gọi service → trả response
│   │   ├── 📄 applicationController.js
│   │   ├── 📄 authController.js
│   │   └── 📄 jobController.js
│   │
│   ├── 📁 middleware               # Hàm chạy trước controller: auth, error handling, validation
│   │   ├── 📄 authMiddleware.js    # Xác thực JWT + phân quyền
│   │   └── 📄 errorMiddleware.js   # Handler lỗi tập trung
│   │
│   ├── 📁 models                   # Mongoose schema/model cho database
│   │   ├── 📄 Application.js       # Mô tả dữ liệu đơn ứng tuyển
│   │   ├── 📄 Job.js               # Mô tả dữ liệu công việc
│   │   └── 📄 User.js              # Mô tả dữ liệu người dùng
│   │
│   ├── 📁 routes                   # Đăng ký endpoint API
│   │   ├── 📄 applicationRoutes.js
│   │   ├── 📄 authRoutes.js
│   │   └── 📄 jobRoutes.js
│   │
│   ├── 📁 services                 # Business logic (xử lý logic phức tạp)
│   │   ├── 📄 jobService.js        # Logic CRUD job, filter job
│   │   └── 📄 realtimeService.js   # Realtime Socket.io events
│   │
│   ├── 📁 utils                    # Helper chung dành cho backend
│   │   └── 📄 mailer.js            # Gửi email (NodeMailer)
│   │
│   ├── ⚙️ package-lock.json
│   └── ⚙️ package.json
│
├── ⚙️ .gitignore                   # Config bỏ qua toàn dự án
├── 📝 README.md                    # Tài liệu mô tả dự án tổng thể
├── ⚙️ package-lock.json
└── ⚙️ package.json

```
