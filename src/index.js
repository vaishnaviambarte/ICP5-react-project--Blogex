import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './view/home/home';
import Contact from "./view/contact/contact";
import About from "./view/about/about";
import BlogWriting from "./view/blogwriting/blogwriting";
import Template from './view/template/template';
import SignUp from './view/login-signup/signup';
import Login from './view/login-signup/login';
import Blogdisplay from './view/blogdisplay/blogdisplay'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: "/blogdisplay",
    element: <Blogdisplay />,
  },
  {
    path: '/blogwriting',
    element: <BlogWriting />
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/login',
    element: <Login/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <RouterProvider router={router}/>
  </>
);


