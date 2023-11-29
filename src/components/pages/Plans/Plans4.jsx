import React from 'react'

import "../../styles/Plans/Plans4.css"

function Plans4() {
    return (
        <div className='part4'>
            <h2 className='part4_h'>The Most Comprehensive Biomarker Analysis</h2>

            <p className='part4_p'>Your membership will include 120+ lab tests and consultations with leading doctor's in respective fields.</p>
           

            <div className='checkbox'>
                <ul>                  
                    <li>
                        <input type="checkbox" value="Heart" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>Heart</label>
                        </div>
                        
                    </li>
                    <li>
                        <input type="checkbox" value="Thyroid" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>Thyroid</label>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" value="Autoimmunity" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>Autoimmunity</label>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" value="Immunity" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>Immunity</label>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" value="Metabolic Health" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>Metabolic Health</label>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" value="Digestive" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>Digestive</label>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" value="Nutrients" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>Nutrients</label>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" value="Liver" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>Liver</label>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" value="sdfh" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>sdfh</label>
                        </div>
                    </li>  
                    <li>
                        <input type="checkbox" value="jhgity" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>jhgity</label>
                        </div>
                    </li>  
                    <li>
                        <input type="checkbox" value="uiogh" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>uiogh</label>
                        </div>
                    </li>  
                    <li>
                        <input type="checkbox" value="iodtgf" className='checkbox_input'/>
                        <div className='checkbox_label'>
                            <label>iodtgf</label>
                        </div>
                    </li>    
                </ul>
            </div>

            <div className='part4_button'>
                <button className='book_free_call'>Book your free call</button>
                <button className='order'>Order test</button>
            </div>
        </div>
    )
}

export default Plans4
