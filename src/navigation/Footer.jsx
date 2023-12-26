import { Link } from 'react-router-dom';
import '../styles/Footer.css';

import phone from "../assets/images/phone.png"
import envelop from "../assets/images/envelop.png"
import location from "../assets/images/location.png"
import logo from "../assets/images/logo.png"
import facebook from "../assets/images/facebook.svg"
import instagram from "../assets/images/instagram.svg"
import linkedin from "../assets/images/linkedin.svg"
import youtube from "../assets/images/youtube.svg"


function Footer() {

    const links = [
        [
            { to: '/', label: 'HOME' },
            { to: '/plans', label: 'PLANS' },
            { to: '/about', label: 'ABOUT US' }
        ],
       
        [
            { to: '/guidance', label: 'GUIDANCE / COUNSELLING' },
            { to: '/support', label: 'SUPPORT / CONTACT' },
            { to: '/forPartners', label: 'FOR PARTNERS' }
        ],

        [
            { to: '/blog', label: 'BLOGS' },
            { to: '/post', label: 'VIDEOS' },
            { to: '/faq', label: 'FAQS' }
        ]
      ];
      
    return (
        <div className='footer'>
            <img src={logo} alt="logo" className='footer_logo'/> 

            <div className='footer_link'>
                <ul>
                    {links.map((elem, index) => (
                        <div key={index} >
                            {elem.map((link, linkIndex) => (
                                <Link key={linkIndex} to={link.to}>
                                    <li>{link.label}</li>
                                </Link>
                            ))}
                        </div>
                    ))}

                    <div className='contact'>
                        <li>
                            <img src={phone} alt="phone" />
                            <span>+0 123 456 789</span> 
                        </li>
                        <li>
                            <img src={envelop} alt="envelop" />
                            <span>example@gmail.com</span>
                        </li>
                        <li>
                            <img src={location} alt="location" />
                            <span>1234 NW Bobcat Lane, St. Robert</span>
                        </li>
                    </div>
                </ul>
            </div>

            <div className='groops'>
                        <a href="#"><img src={facebook} alt="facebook" className='facebook'/></a>

                        <a href="#"><img src={instagram} alt="instagram" className='instagram'/></a>

                        <a href="#"><img src={linkedin} alt="linkedin" className='linkedin'/></a>

                        <a href="#"><img src={youtube} alt="facebook" className='youtube'/></a>
            </div>
        </div>
    )
}

export default Footer