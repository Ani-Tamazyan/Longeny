import countryside from "../../assets/images/walk-countryside.png"
import vector1 from "../../assets/images/VectorHeader.png"
import vector2 from "../../assets/images/VectorHeader2.png"
import ellipseHeader1 from "../../assets/images/ellipseHeader1.png"



function PlansHeader() {
    return (
        <div className='part_header padding'>
            <img src={vector1} alt="vector"  className='header_background_img1'/>
            <img src={vector2} alt="vector"  className='header_background_img2'/>
            <div className='part_header_left_side'>

                <div className='part_header_left_side_header'>
                    <h2 className='part_header_left_side_h'>HEALTH ASSESSMENT</h2>
                </div>

                <img src={ellipseHeader1} alt="ellipseHeader" className='ellipseHeader1'/>
               
               <div className='part_header_left_side_card_cont'>
                <div className='part_header_left_side_card'>
                        <div className='part_header_left_side_card_text'>
                            <span>LONGENY </span>
                            <span>Be the Master of Your Health</span>  
                        </div>                                     
                    </div>
               </div>
                
                
                <div className='header_button'>
                    <button className='book_free_call'>Book my free call</button>
                </div>
            </div>

            <div className='right-side'>
                <img src={countryside} alt="countryside" className='part_header_img'/>
            </div>
        
        </div>
    )
}

export default PlansHeader


