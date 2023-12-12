import React from 'react'
import {label} from '../../components/constant';

import "../../styles/Plans/PlansCheckbox.css"
 
function PlansCheckbox() {
    return (
        <div className='part_checkbox'>
            <h2 className='part_checkbox_h'>The Most Comprehensive Biomarker Analysis</h2>

            <p className='part_checkbox_p'>Your membership will include 120+ lab tests and consultations with leading doctor's in respective fields.</p>
           

            <div className='checkbox'>
                <ul>
                {label.map((checkboxLabel, index) => (
                    <li key={index}>
                    <input type="checkbox" value={checkboxLabel} className='checkbox_input' />
                    <div className='checkbox_label'>
                        <label htmlFor={checkboxLabel}>{checkboxLabel}</label>
                    </div>
                    </li>
                ))}
                </ul>
            </div>

            <div className='part4_button'>
                <button className='book_free_call'>Book your free call</button>
                <button className='order'>Order test</button>
            </div>
        </div>
    )
}

export default PlansCheckbox
