import { useForm } from 'react-hook-form';
import { useState } from 'react';

import vector1 from "../../assets/images/VectorForm1.png"
import vector2 from "../../assets/images/VectorForm2.png"


function PlansForm() {
    const [successMsg, setSuccessMsg] = useState("");

    const { register, handleSubmit, formState: { errors }, reset} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        // setSuccessMsg("registration is successful.");
        reset();
    }


    return (
        <div className='part_form_cont padding'>
         <img src={vector1} alt="vector" className='form_background_img1'/> 
        <div className='part_form'>   
                 
            <h2>SCHEDULE YOUR FREE CALL</h2>
            <p>Experience the power within you to control your health Schedule a call with our counsellors <span>NOW!</span></p>

            <form onSubmit={handleSubmit(onSubmit)}>
                {successMsg && <p className="success-msg">{successMsg}</p>}
                <label htmlFor="first">First Name</label>
                <input type="text" name="first" id="first" {...register('first', {required: true})}/>
                {errors.first && errors.first.type === "required" && (
                    <p className="errorMsg">First Name is required.</p>
                )}

                <label htmlFor="last">Last Name</label>
                <input type="text" name="last" id="last" {...register('last', {required: true})}/>
                {errors.last && errors.last.type === "required" && (
                    <p className="errorMsg">Last Name is required.</p>
                )}

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" {...register('email', {required: "Email is required.", 
                pattern: {value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: "Email is not valid." }})}/>
                {errors.email && <p className="errorMsg">{errors.email.message}</p>}

                <label htmlFor="mobil">Mobile</label>
                <input type="tel" name="mobil" id="mobil" {...register('mobil', {required: true})} />
                {errors.mobil && errors.mobil.type === "required" && (
                    <p className="errorMsg">Mobile is required.</p>
                )}

                <label htmlFor="interest">What are you most interested in?</label>
                <select name="interest" id="interest" {...register('interest')}>
                    <option value=""></option>           
                    <option value="heart">Heart</option>
                    <option value="liver">Liver</option>
                    <option value="immunity">Immunity</option>
                </select>
                {errors.interest && errors.interest.type === "required" && (
                    <p className="errorMsg">Interest is required.</p>
                )}
                
        
                <button type="submit">Submit Request</button>
            </form>
        </div>
        
        <img src={vector2} alt="vector" className='form_background_img2'/>
    </div>
    )
}
 
export default PlansForm



