import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './styles/Navbar.css';;
import dropDown from '../assets/images/drop-down.png';
import logo from '../assets/images/logo.png';
import menu from '../assets/images/menu.jpg'; 

export default function Navbar() {
  const location = useLocation();
  const [showDropDown, setShowDropDown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); 

  const links = [
    { to: '/', label: 'HOME' },
    { to: '/plans', label: 'PLANS' },
    { to: '/guidance', label: 'GUIDANCE/CONSELLING' },
    { to: '/resources', label: 'RESOURCES', dropdownLinks: [
        { to: '/blog', label: 'BLOGS' },
        { to: '/post', label: 'VIDEOS' },
        { to: '/post', label: 'FAQS' },
      ],
    },
    { to: '/support', label: 'SUPPORT/CONTACT' },
    { to: '/forPartners', label: 'FOR PARTNERS' },
    { to: '/about', label: 'ABOUT US' },
  ];

  const handleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu); 
  };

  return (
    <header>

      <img src={logo} alt="logo" className='nav_logo'/>

      <nav>
        <ul className='nav-links'>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className={location.pathname === link.to ? 'link activ' : 'link'}
              >
                {link.label}
                {link.dropdownLinks && (
                  <img
                    src={dropDown}
                    alt='dropdown'
                    className='dropdown-image'
                    onClick={handleDropDown}
                    style={index === 3 ? { position: 'relative' } : {}}
                  />
                )}
              </Link>
              {link.dropdownLinks && showDropDown && (
                <div className='dropdown-content'>
                  <ul>
                    {link.dropdownLinks.map((dropdownLink, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <Link to={dropdownLink.to} className='dropdown-link'>
                          {dropdownLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>      
               
      </nav>
      <button className='sign-in'>SIGN IN</button>

      <img src={menu} alt="menu" className='menu' onClick={handleMobileMenu} />

      {showMobileMenu && (
        <nav className='mobile-menu'>
          <ul className='nav-links'>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? 'link activ' : 'link'}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
