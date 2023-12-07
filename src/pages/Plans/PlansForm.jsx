import React from 'react'

import "../../styles/Plans/PlansForm.css";


function Plans7() {
    return (
        <div className='part7'>
            <h2>SCHEDULE YOUR FREE CALL</h2>
            <p>Experience the power within you to control your health Schedule a call with our counsellors <span>NOW!</span></p>

            <form>
                <label htmlFor="">First Name</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Last Name</label>
                <input type="text" name="" id="" />
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" />
                <label htmlFor="">Mobile</label>
                <input type="phone" name="" id="" />
                <label htmlFor="">What are you most interested in?</label>
                <select name="interest" id="interest">
                    <option value=""></option>           
                    <option value="volvo">Heart</option>
                    <option value="saab">Liver</option>
                    <option value="mercedes">Immunity</option>
                </select>
        
                <button>Submit Request</button>
            </form>
        </div>
    )
}

export default Plans7

