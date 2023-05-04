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
import LoginLayout from "../layout/LoginLayout";
import Terms from "../Terms/Terms";
import PrivateRouter from "./PrivateRouter";
import ChefDetails from "../pages/Share/ChefDetails/ChefDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'chef/:id',
        element: <PrivateRouter><ChefDetails /></PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
      },
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
        element: <PrivateRouter><Service /></PrivateRouter>
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ],
  },
  {
    path: '/',
    element: <LoginLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: '/terms',
        element: <Terms />
      }
    ]
  }
]);

export default router;