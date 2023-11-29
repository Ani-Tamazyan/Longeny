import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Guidance from './components/pages/Guidance';
import Plans from './components/pages/Plans/Plans';
import Resources from './components/pages/Resources';
import Support from './components/pages/Support';
import ForPartners from './components/pages/ForPartners';

import './App.css';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/support" element={<Support />} />
        <Route path="/forPartners" element={<ForPartners />} />
      </Routes>
    </>
  );
}

export default App;




