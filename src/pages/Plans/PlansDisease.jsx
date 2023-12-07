import React from 'react'

import "../../styles/Plans/PlansDisease.css"

import organ1 from "../../assets/images/organ1.png"
import organ2 from "../../assets/images/organ2.png"
import organ3 from "../../assets/images/organ3.png"
import organ4 from "../../assets/images/organ4.png"

function Plans3() {
    return (
        <div className='part3'>
            <h2>The 4 Spectres of Chronic Disease</h2>

            <div className='part3_organ1'>
                <img src={organ1} alt="organ1" className='organ1_img'/>

                <div className='part3_organ1_cont'>
                    <h3>Metabolic Disease</h3>
                </div>
                
            </div>
            <div className='dashed1'></div>
            <div className='dashed2'></div>
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
            <div className='dashed3'></div>

            <div className='part3_organ4'>
               <img src={organ4} alt="organ4" className='organ4_img'/>

            <div className='part3_organ4_cont'>
                <h3>Cancer</h3>
            </div>             
            </div>
        </div>
    )
}

export default Plans3

