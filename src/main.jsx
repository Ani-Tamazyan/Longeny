import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Guidance from './components/pages/Guidance';
import Plans from './components/pages/Plans/Plans';
import Resources from './components/pages/Resources';
import Support from './components/pages/Support';
import ForPartners from './components/pages/ForPartners';


const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/guidance',
        element: <Guidance />
      },
      {
        path: '/plans',
        element: <Plans />,
      },
      {
        path: '/resources',
        element: <Resources />,
      },
      {
        path: '/support',
        element: <Support />,
      },
      {
        path: '/forPartners',
        element: <ForPartners />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
