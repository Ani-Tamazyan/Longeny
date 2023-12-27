import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import dropDown from '../assets/images/drop-down.svg';
import logo from '../assets/images/logo.png';
import menu from '../assets/images/menu.jpg';

export default function Navbar() {
  const location = useLocation();
  const [showDropDown, setShowDropDown] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const links = [
    { to: '/', label: 'HOME' },
    { to: '/plans', label: 'PLANS' },
    { to: '/guidance', label: 'GUIDANCE / COUNSELLING' },
    { to: '/resources', label: 'RESOURCES', dropdownLinks: [
        { to: '/blog', label: 'BLOGS' },
        { to: '/post', label: 'VIDEOS' },
        { to: '/faqs', label: 'FAQS' },
      ],
    },
    { to: '/support', label: 'SUPPORT / CONTACT' },
    { to: '/forPartners', label: 'FOR PARTNERS' }, 
    { to: '/about', label: 'ABOUT US' },
  ];

  const handleDropDown = (index, event) => {
    event.preventDefault();
    setShowDropDown((prevIndex) => (prevIndex === index ? null : index));
  };


  const handleMobileLinkClick = () => {
    setShowMobileMenu(false);
  };

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const renderLinks = (linksArray) => (
    <ul className='nav-links'>
      {linksArray.map((link, index) => (
        <li key={index}>
          <Link
            to={link.to}
            className={location.pathname === link.to ? 'link activ' : 'link'}
            onClick={handleMobileLinkClick}
          >
            {link.label}
            {link.dropdownLinks && (
              <img
                src={dropDown}
                alt='dropdown'
                className='dropdown-image'
                onClick={(event) => handleDropDown(index, event)}
              />
            )}
          </Link>

          {link.dropdownLinks && showDropDown === index && (
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
  );

  return (
    <div className='part_nav'>
      <nav>
        
        <img src={logo} alt="logo" className='nav_logo'/>
      
        <ul className='navbar'>
              {renderLinks(links)}        

            <div className='nav-button'>
              <button className='sign-in'>SIGN IN</button>
            </div>
        </ul>   

      <img src={menu} alt="menu" className='menu' onClick={handleMobileMenu} />

      <div className={`menu_cont ${showMobileMenu ? 'mobil_activ' : ''}`} >
          {showMobileMenu && (
            <nav className='mobile-menu'>
              {renderLinks(links)}
              <button className='menu-sign-in'>SIGN IN</button>                  
            </nav>
          )}
        </div>
      </nav>
    </div>
  );
}