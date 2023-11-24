import React from 'react'

import './Home.css'
import marisa from './images/marisa.jpg'
import services from './images/services.jpg'
import oldMan from './images/oldMan.jpg'

function Home() {
    return (
        <>
            <div className='home_part1'>
                <div className='home_left_side'>
                    <h1 className='home_left_side_h'>Live Long with Health & Vitality</h1>
                    <p className='home_left_side_p'>Helping you taking charge of your health and adding years to your life</p>  
                    <button className='bookFreeCall'>Book my free call</button>
                </div>

                <div className='home_img_card_I'>
                    <img src={services} alt="services" className='home_img_cardImg'/>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>

                <div className='home_img_card_II'>
                    <img src={marisa} alt="marisa" className='home_img_cardImg'/>
                    <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
            </div>

            <div className='home_part2'>
                <div className='home_part2_I'>
                    <img src={oldMan} alt="oldMan" className='home_part2_I_img'/>

                    <div className='home_part2_card1'>
                        <h2 className='home_part2_card1_h'>Want to be a Centenarian with great health? Yes, you can!</h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </>       
    )
}

export default Home
