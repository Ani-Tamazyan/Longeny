import React from 'react'

import "./Plans.css"
import countryside from "./images/walk-countryside.png";
import link from "./images/link.png";
import organ1 from "./images/organ1.png"
import organ2 from "./images/organ2.png"
import organ3 from "./images/organ3.png"
import organ4 from "./images/organ4.png"

function Plans() {
    return (
        <>
        <div className='part1'>
            <div className='part1_left_side'>

                <h2 className='part1_left_side_h'>HEALTH ASSESSMENT</h2>

                <div className='part1_left_side_card'>
                    <p>LONGENY 
                        <span>Be the Master of Your Health</span>
                    
                    </p>
                    
                </div>

                <button className='bookFreeCall'>Book my free call</button>
            </div>

            <div className='part1_img'>
                
            </div>
            
        </div>

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
                        <button className='SavesLives'>Saves Lives</button>
                        <button className='Improves'>Improves Quality of Life</button>
                        <button className='Extends'>Extends lifespan and healthspan</button>
                        <button className='expensive'>It’s less expensive than treatment</button>
                        <button className='treatment'>Avoids painful treatment such as surgery or chemotherapy</button>
                    
                    </div>

                    <div className='part2_card_p'>
                        <p>At LonGeny our first goal is to help prevent or delay the onset of chronic disease.
                            <p>Why Prevention?</p>                           
                        </p>
                    </div>
                </div>
                <div className='part2_card_bookFreeCall'>
                    <button className='bookFreeCall'>Book your free call</button>
                </div>
                
            </div>
            </div>


        </div>

        <div className='part3'>
            <h2>The 4 Spectres of Chronic Disease</h2>

            <div className='part3_organ1'>
                <img src={organ1} alt="organ1" className='organ1_img'/>

                <div className='part3_organ1_cont'>
                    <h3>Metabolic Disease</h3>
                </div>
                
            </div>

            <div className='part3_organ'>
                <div className='part3_organ2'>
                    <img src={organ2}alt="organ2" className='organ2_img'/>

                    <div className='part3_organ2_cont'>
                        <h3>Atherosclerotic Disease 
                            <p>(Cardiovascular Disease, Cerebrovascular Disease)</p>     
                        </h3>
                    </div>
                
                </div>

                <div className='part3_organ3'>
                    <img src={organ3} alt="organ3" className='organ3_img'/>

                    <div className='part3_organ3_cont'>
                        <h3>Neuro Degenerative Disease</h3>
                    </div>
                    
                </div>
            </div>

            <div className='part3_organ4'>
               <img src={organ4} alt="organ4" className='organ4_img'/>

            <div className='part3_organ4_cont'>
                <h3>Cancer</h3>
            </div>             
            </div>
        </div>
        </>
    )
}

export default Plans











