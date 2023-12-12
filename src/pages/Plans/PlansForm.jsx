import React from 'react'

import "../../styles/Plans/PlansForm.css";


function PlansForm() {
    return (
        <div className='part_form'>
            <h2>SCHEDULE YOUR FREE CALL</h2>
            <p>Experience the power within you to control your health Schedule a call with our counsellors <span>NOW!</span></p>

            <form>
                <label htmlFor="first">First Name</label>
                <input type="text" name="first" id="first" />

                <label htmlFor="last">Last Name</label>
                <input type="text" name="last" id="last" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="mobil">Mobile</label>
                <input type="phone" name="mobil" id="mobil" />

                <label htmlFor="interest">What are you most interested in?</label>
                <select name="interest" id="interest">
                    <option value=""></option>           
                    <option value="heart">Heart</option>
                    <option value="liver">Liver</option>
                    <option value="immunity">Immunity</option>
                </select>
        
                <button>Submit Request</button>
            </form>
        </div>
    )
}
 
export default PlansForm

