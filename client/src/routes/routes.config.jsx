// routes/routes.config.jsx (ĐÃ SỬA)

import Home from '../pages/Home'
import DefaultLayout from "../layout/DefaultLayout" 
import HomePage from '../features/Home/components/HomePage'
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
      }
    ]
  },

]

export default routes