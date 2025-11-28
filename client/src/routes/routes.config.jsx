// routes/routes.config.jsx (ĐÃ SỬA)

import Home from '../pages/Home'
import DefaultLayout from "../layout/DefaultLayout" 
import HomePage from '../features/Home/components/HomePage'
import Auth from '../pages/Auth'
const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
 
        element: <Home />,
        index: true, 
        name: 'Home',
      },
      {
        path: '/about', 
        element: <HomePage />, 
        name: 'About',
      },
      {
        path: "/auth/login",
        element: <Auth />,
        name: "Login",
      },
      
    ]
  },

  // user-route
  {
    path: '/user',
    children: [
      {
        path: '/user/profile',
       
      }
    ]
  },

  // recruitment-route
  {
    path: '/recruitment',
    children: [
      {
        path: '/recruitment/apply',
      },{
        path: '/recruitment/post',
      },
      {
        path: '/recruitment/profile',
      },{
        path: '/recruitment/saved',
      },
      {

      }

    ]
  },

  // company-route
  {
    path: '/company',
    children: [
      {
        path: '/company/apply',
      },
      {
        path: '/company/post',
      }
      ,{
        path: '/company/profile',
      }
    ]
  }


]

export default routes