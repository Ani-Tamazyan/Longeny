import React from 'react'
import { NavLink } from 'react-router-dom'

import "./Navbar.css"


const Navbar = () =>{
    return (
        <>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About Us</NavLink>
            <NavLink to="/guidance" >Guidance</NavLink>
            <NavLink to="/plans" >Plans</NavLink>
            <NavLink to="/resources" >Resources</NavLink>
            <NavLink to="/support" >Support</NavLink>
            <NavLink to="/forPartners" >For Partners</NavLink>
        </>
    )
}
 
export default Navbar


