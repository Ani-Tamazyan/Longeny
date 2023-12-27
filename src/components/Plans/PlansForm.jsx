import { useForm } from 'react-hook-form';

import vector1 from "../../assets/images/VectorForm1.png"
import vector2 from "../../assets/images/VectorForm2.png"

function PlansForm() {

    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        if (Object.entries(data).some(([key, value]) => {
            if (key === 'mobil') {
                return isNaN(Number(value)); 
            } else if (key === 'email') {
                const isValidEmail = (value) => {
                    const atIndex = value.indexOf('@');
                    const dotIndex = value.lastIndexOf('.');
                
                    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < value.length - 1;
                    };
                !isValidEmail(value)           
                }     
            return false; 
         })) {
            alert('Invalid input types. Please check your inputs.');
        } else if (Object.values(data).some(value => !value)) {
            alert('Please fill in all fields before submitting.');
        } else {
            console.log('Form data submitted:', data);
            alert('Submitted');
        }
    };

    return (
        <div className='part_form_cont padding'>
         <img src={vector1} alt="vector" className='form_background_img1'/> 
        <div className='part_form'>   
                 
            <h2>SCHEDULE YOUR FREE CALL</h2>
            <p>Experience the power within you to control your health Schedule a call with our counsellors <span>NOW!</span></p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="first">First Name</label>
                <input type="text" name="first" id="first" {...register('first')}/>

                <label htmlFor="last">Last Name</label>
                <input type="text" name="last" id="last" {...register('last')}/>

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" {...register('email')}/>

                <label htmlFor="mobil">Mobile</label>
                <input type="tel" name="mobil" id="mobil" {...register('mobil')} />

                <label htmlFor="interest">What are you most interested in?</label>
                <select name="interest" id="interest" {...register('interest')}>
                    <option value=""></option>           
                    <option value="heart">Heart</option>
                    <option value="liver">Liver</option>
                    <option value="immunity">Immunity</option>
                </select>
        
                <button type="submit">Submit Request</button>
            </form>
        </div>
        
        <img src={vector2} alt="vector" className='form_background_img2'/>
    </div>
    )
}
 
export default PlansForm



