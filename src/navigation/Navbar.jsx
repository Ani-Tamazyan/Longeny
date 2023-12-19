import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/Navbar.css';
import dropDown from '../assets/images/drop-down.png';
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
        { to: '/post', label: 'FAQS' },
      ],
    },
    { to: '/support', label: 'SUPPORT / CONTACT' },
    { to: '/forPartners', label: 'FOR PARTNERS' }, 
    { to: '/about', label: 'ABOUT US' },
    // { to: '/signIn', label: 'SIGN IN' },
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


  return (
    <div className='part_nav'>
      <nav>
        <img src={logo} alt="logo" className='nav_logo'/>
      
        <ul className='navbar'>
            <div className='nav-links'>
              {links.map((link, index) => (
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
          </div>
          

            <div className='nav-button'>
              <button className='sign-in'>SIGN IN</button>
            </div>
        </ul>   

      <img src={menu} alt="menu" className='menu' onClick={handleMobileMenu} />

      <div className={`menu_cont ${showMobileMenu ? 'mobil_activ' : ''}`} >
          {showMobileMenu && (
            <nav className='mobile-menu'>
              <ul className='nav-links'>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className={location.pathname === link.to ? 'link activ' : 'link'}
                      onClick={handleMobileLinkClick} 
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}

                <li>
                  <button className='menu-sign-in'>SIGN IN</button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </nav>
    </div>
  );
}




// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../styles/Navbar.css';
// import dropDown from '../assets/images/drop-down.png';
// import logo from '../assets/images/logo.png';
// import menu from '../assets/images/menu.jpg';

// export default function Navbar() {
//   const location = useLocation();
//   const [showDropDown, setShowDropDown] = useState(null);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const links = [
//     { to: '/', label: 'HOME' },
//     { to: '/plans', label: 'PLANS' },
//     { to: '/guidance', label: 'GUIDANCE / COUNSELLING' },
//     { to: '/resources', label: 'RESOURCES', dropdownLinks: [
//         { to: '/blog', label: 'BLOGS' },
//         { to: '/post', label: 'VIDEOS' },
//         { to: '/post', label: 'FAQS' },
//       ],
//     },
//     { to: '/support', label: 'SUPPORT / CONTACT' },
//     { to: '/forPartners', label: 'FOR PARTNERS' }, 
//     { to: '/about', label: 'ABOUT US' },
//   ];

//   const handleDropDown = (index, event) => {
//     event.preventDefault();
//     setShowDropDown((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const handleMobileLinkClick = () => {
//     setShowMobileMenu(false);
//   };

//   const handleMobileMenu = () => {
//     setShowMobileMenu(!showMobileMenu);

//     const menuCont = document.querySelector('.menu_cont');
//     if (menuCont) {
//       menuCont.style.backgroundColor = showMobileMenu ? 'transparent' : '#ccc';
//     }
//   };

//   return (
//     <div className='part_nav'>
//       <nav>
//         <img src={logo} alt="logo" className='nav_logo'/>
      
//         <ul className='navbar'>
//           <div className='nav-links'>
//             {links.map((link, index) => (
//               <li key={index}>
//                 <Link
//                   to={link.to}
//                   className={location.pathname === link.to ? 'link activ' : 'link'}
//                   onClick={handleMobileLinkClick}
//                 >
//                   {link.label}
//                   {link.dropdownLinks && (
//                     <img
//                       src={dropDown}
//                       alt='dropdown'
//                       className='dropdown-image'
//                       onClick={(event) => handleDropDown(index, event)}
//                     />
//                   )}
//                 </Link>

//                 {link.dropdownLinks && showDropDown === index && (
//                   <div className='dropdown-content'>
//                     <ul>
//                       {link.dropdownLinks.map((dropdownLink, dropdownIndex) => (
//                         <li key={dropdownIndex}>
//                           <Link to={dropdownLink.to} className='dropdown-link'>
//                             {dropdownLink.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//               </li>
//             ))}
//           </div>
          
//           <div className='nav-button'>
//             <button className='sign-in' onClick={handleMobileMenu}>
//               SIGN IN
//             </button>
//           </div>
//         </ul>   

//         <img src={menu} alt="menu" className='menu' onClick={handleMobileMenu} />

//         <div className='menu_cont' >
//           {showMobileMenu && (
//             <nav className='mobile-menu'>
//               <ul className='nav-links'>
//                 {links.map((link, index) => (
//                   <li key={index}>
//                     <Link
//                       to={link.to}
//                       className={location.pathname === link.to ? 'link activ' : 'link'}
//                       onClick={handleMobileLinkClick} 
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               <button className='sign-in' onClick={handleMobileLinkClick}>
//                 SIGN IN
//               </button>
//             </nav>
//           )}
//         </div>
//       </nav>
//     </div>
//   );


        