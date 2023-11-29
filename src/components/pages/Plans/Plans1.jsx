import React from 'react'

import "../../styles/Plans/Plans1.css"

import countryside from "../../../assets/images/walk-countryside.png"

function Plans1() {
    return (
        <div className='part1'>
            <div className='part1_left_side'>

                <h2 className='part1_left_side_h'>HEALTH ASSESSMENT</h2>

                <div className='part1_left_side_card'>
                    <p>LONGENY 
                        <span>Be the Master of Your Health</span>                 
                    </p>
                        
                </div>

                <button className='book_free_call'>Book my free call</button>
            </div>

            <img src={countryside} alt="countryside" className='part1_img'/>
                
        </div>
    )
}

export default Plans1
