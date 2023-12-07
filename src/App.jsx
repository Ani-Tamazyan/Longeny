import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Guidance from './pages/Guidance';
import Plans from './pages/Plans/Plans';
import Resources from './pages/Resources';
import Support from './pages/Support';
import ForPartners from './pages/ForPartners';

import './App.css';

const Layout = () => {
  return(
    <div>
      <Navbar />
      <Outlet />
      <Footer />
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




