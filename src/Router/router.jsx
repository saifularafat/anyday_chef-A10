import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Service from "../pages/Service/Service";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/chef')
      }
    ]
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: 'service',
        element: <Service />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ],
  },
  // {
  //   path: '/',
  //   element: <Login
  // }
]);

export default router;