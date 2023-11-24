import { useState, useEffect } from 'react'
import {Route, Routes} from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./Navbar/Pages/Home/Home"
import AboutUs from "./Navbar/Pages/About_Us/AboutUs"
import Guidance from "./Navbar/Pages/Guidance/Guidance"
import Plans from "./Navbar/Pages/Plans/Plans"
import Resources from "./Navbar/Pages/Resources/Resources"
import Support from "./Navbar/Pages/Support/Support"
import ForPartners from "./Navbar/Pages/ForPartners/ForPartners"

import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/guidance" element={<Guidance />}/>
        <Route path="/plans" element={<Plans />}/>
        <Route path="/resources" element={<Resources />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/forPartners" element={<ForPartners />}/>
      </Routes>   

         
    </div>
  )
}

export default App




