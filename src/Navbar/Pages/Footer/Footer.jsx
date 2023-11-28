import React from 'react'

import './Footer.css';
import phone from "./images/phone.png"
import envelop from "./images/envelop.png"
import location from "./images/location.png"
import groops from "./images/groops.png"


function Footer() {
    return (
        <div className='footer'>
            <div className='footer_logo'>

            </div>

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

                    <div>
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

            <img src={groops} alt="groops" className='groops' />       
        </div>
    )
}

export default Footer