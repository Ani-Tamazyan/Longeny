import React from 'react'

import "../../styles/Plans/PlansPrevent.css"

import link from "../../assets/images/link.png"

function PlansPrevent() {
    return (
        <div className='part_prevention'>
            <div className='part_prevention_left_side'>

            </div>

            <div className='part_prevention_right_side'>
                <div className='part_prevention_text'>
                    <h2 className='part_prevention_right_side_h'>Prevention is Better Than Cure!</h2>
                    <p className='part_prevention_right_side_p'>While we know that the best way to live long healthily is to avoid or delay the onset of disease, unfortunately 
                     our healthcare systems are geared for addressing what to do once you have a disease and not to prevent or delay the onset of disease.</p>
                    <a href="#" className='learnMore'>
                        <span>Learn more </span>
                        <img src={link} alt="link" className='link'/>
                    </a>
                </div>

                <div className='part_prevention_card'>
                    <div className='part_prevention_card_cont'>

                     <div className='part_prevention_card_buttons'>
                        <button>Saves Lives</button>
                        <button>Improves Quality of Life</button>
                        <button>Extends lifespan and healthspan</button>
                        <button>It’s less expensive than treatment</button>
                        <button>Avoids painful treatment such as surgery or chemotherapy</button>
                    </div>

                    <div className='part_prevention_card_text'>
                        <p>At LonGeny our first goal is to help prevent or delay the onset of chronic disease. </p>
                        <span> Why Prevention?</span>                           
                       
                    </div>
                </div>

                <div className='card_book_free_call'>
                    <button className='book_free_call'>Book your free call</button>
                </div>                 
                </div>
            </div>
    </div>
    )
}

export default PlansPrevent
