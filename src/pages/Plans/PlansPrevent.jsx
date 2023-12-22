import "../../styles/Plans/PlansPrevent.css"

import link from "../../assets/images/link.png"
import left_img from "../../assets/images/Group 520.png"

function PlansPrevent() {
    return (
        <div className='part_prevention'>
            <div className='part_prevention_left_side'>
                <img src={left_img} alt="left_img" />
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

                        <div className='part_prevention_card_p'>
                            <p>Saves Lives</p>
                            <p>Improves Quality of Life</p>
                            <p>Extends lifespan and healthspan</p>
                            <p>It’s less expensive than treatment</p>
                            <p>Avoids painful treatment such as surgery or chemotherapy</p>
                        </div>

                        <div className='part_prevention_card_text'>
                            <p>At LonGeny our first goal is to help prevent or delay the onset of chronic disease. </p>
                            <span> Why Prevention?</span>                           
                        </div>
                    

                        <div className='card_book_free_call'>
                            <button className='book_free_call'>Book your free call</button>
                        </div> 
                    </div>                
                </div>
            </div>
        </div>
    )
}

export default PlansPrevent

