import React from 'react'

import "../../styles/Plans/Plans2.css"

import link from "../../assets/images/link.png"

function Plans2() {
    return (
        <div className='part2'>
            <div className='part2_left_side'>

            </div>

                <div className='part2_right_side'>
                    <div className='part2_text'>
                        <h2 className='part2_right_side_h'>Prevention is Better Than Cure!</h2>
                        <p className='part2_right_side_p'>While we know that the best way to live long healthily is to avoid or delay the onset of disease, unfortunately 
                        our healthcare systems are geared for addressing what to do once you have a disease and not to prevent or delay the onset of disease.
                        <a href="#" className='learnMore'>Learn more 
                        <img src={link} alt="link" className='link'/>
                        </a>
                        </p>
                    </div>

                    <div className='part2_card'>
                        <div className='part2_card_cont'>

                        <div className='part2_card_button'>
                            <button>Saves Lives</button>
                            <button>Improves Quality of Life</button>
                            <button>Extends lifespan and healthspan</button>
                            <button>It’s less expensive than treatment</button>
                            <button>Avoids painful treatment such as surgery or chemotherapy</button>
                        
                        </div>

                        <div className='part2_card_p'>
                            <p>At LonGeny our first goal is to help prevent or delay the onset of chronic disease.
                                <span> Why Prevention?</span>                           
                            </p>
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

export default Plans2
