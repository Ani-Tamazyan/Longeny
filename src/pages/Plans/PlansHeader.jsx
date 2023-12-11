import React from 'react'

import "../../styles/Plans/PlansHeader.css"

import countryside from "../../assets/images/walk-countryside.png"


function PlansHeader() {
    return (
        <div className='part_header'>
            <div className='part_header_left_side'>

                <h2 className='part_header_left_side_h'>HEALTH ASSESSMENT</h2>

                <div className='part_header_left_side_card'>
                    <div className='part_header_left_side_card_text'>
                        <span>LONGENY </span>
                        <span>Be the Master of Your Health</span>  
                    </div>                                     
                </div>
                
                <div className='header_button'>
                    <button className='book_free_call'>Book my free call</button>
                </div>
            </div>

            <img src={countryside} alt="countryside" className='part_header_img'/>
                
        </div>
    )
}

export default PlansHeader

