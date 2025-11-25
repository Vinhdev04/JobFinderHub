import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/assets/css/theme.css';
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import routes from './routes/routes.config'
// 1. Dùng mảng routes để tạo Router Object
const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
      {/* <App /> */}
  </StrictMode>,
)
