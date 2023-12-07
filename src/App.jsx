import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Guidance from './components/pages/Guidance';
import Plans from './components/pages/Plans/Plans';
import Resources from './components/pages/Resources';
import Support from './components/pages/Support';
import ForPartners from './components/pages/ForPartners';

import './App.css';

const Layout = () => {
  return(
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/guidance",
        element: <Guidance />
      },
      {
        path: "/plans",
        element: <Plans />
      },
      {
        path: "/resources",
        element: <Resources />
      }, {
        path: "/support",
        element: <Support />
      }, {
        path: "/partners",
        element: <ForPartners />
      }
    ]
  },
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;




