import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import dropDown from '../images/drop-down.png';

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showDropDown, setShowDropDown] = useState(false);



  const links = [
    { to: '/', label: 'HOME' },
    { to: '/plans', label: 'PLANS' },
    { to: '/guidance', label: 'GUIDANCE/CONSELLING' },
    { to: '/resources', label: 'RESOURCES', hasDropDown: true }, 
    { to: '/support', label: 'SUPPORT/CONTACT' },
    { to: '/forPartners', label: 'FOR PARTNERS' },
    { to: '/about', label: 'ABOUT US' },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  
  const dropdownLinks = [
    { to: '/blog', label: 'BLOGS' },
    { to: '/post', label: 'VIDEOS' },
    { to: '/post', label: 'FAQS' },
  ];

  return (
    <header>
      
      <div className='nav_logo'>
        
      </div>

      <nav>
        <ul className='navLinks'>
            {links.map((link, index) => (
            <li key={index}>
                <Link
                to={link.to}
                className={index === activeIndex ? 'link activ' : 'link'}
                onClick={() => handleClick(index)}
                >
                {link.label}
                {
                    link.hasDropDown ? (
                        <img
                        src={dropDown}
                        alt='dropdown'
                        className='dropdown-image'
                        onClick={handleDropDown}
                        style={index === 3 ? { position: 'relative' } : {}}
                      />
                    
                    )  : ""
                }
                </Link>
            </li>
            ))}


            {showDropDown && (
            <div className="dropdown-content">
                <ul>
                {dropdownLinks.map((link, index) => (
                    <li key={index}>
                    <Link to={link.to} className="dropdown-link">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            )}
            
          <li>
            <button className='SignIn'>SIGN IN</button>
          </li>
        </ul>
      </nav>
                
    </header>
  );
}

