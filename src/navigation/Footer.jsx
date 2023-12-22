import '../styles/Footer.css';

import phone from "../assets/images/phone.png"
import envelop from "../assets/images/envelop.png"
import location from "../assets/images/location.png"
import logo from "../assets/images/logo.png"
import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/instagram.png"
import linkedin from "../assets/images/linkedin.png"
import youtube from "../assets/images/youtube.png"


function Footer() {
    return (
        <div className='footer'>
            <img src={logo} alt="logo" className='footer_logo'/> 

            <div className='footer_link'>
                <ul>
                    <div>
                        <a href="#"><li>Home</li></a>
                        <a href="#"><li>plans</li></a>
                        <a href="#"><li>about us</li></a>            
                    </div>

                    <div>
                        <a href="#"><li>guidance / counselling</li></a>
                        <a href="#"><li>Support / contact</li></a>
                        <a href="#"><li>for partners</li></a>      
                    </div>

                    <div>
                        <a href="#"><li>Blogs</li></a>
                        <a href="#"><li>Videos</li></a>
                        <a href="#"><li>FAQ</li></a>                  
                    </div>

                    <div className='contact'>
                        <li>
                            <img src={phone} alt="phone" />
                            +0 123 456 789
                        </li>
                        <li>
                            <img src={envelop} alt="envelop" />
                            example@gmail.com
                        </li>
                        <li>
                            <img src={location} alt="location" />
                            1234 NW Bobcat Lane, St. Robert
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