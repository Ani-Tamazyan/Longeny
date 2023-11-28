import React, { useState } from 'react'

import Footer from "../Footer/Footer"

import "./Plans.css"
import link from "./images/link.png";
import organ1 from "./images/organ1.png"
import organ2 from "./images/organ2.png"
import organ3 from "./images/organ3.png"
import organ4 from "./images/organ4.png"
import drop from "./images/drop.png"

function Plans() {
    const [openSection, setOpenSection] = useState(null);
    
  const handleDropClick = (section) => {
    if (openSection === section) {  
      setOpenSection(null);
    } else {     
      setOpenSection(section);
    }
  };

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
                            <span>Why Prevention?</span>                           
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
                <button className='bookFreeCall'>Book your free call</button>
                <button className='order'>Order test</button>
            </div>
        </div>

        <div className='part5'>
            <h2>360ME from LONGENY. India’s First Subscription Based Comprehensive Health Assessment Program</h2>

            <p>Here’s What you Get with 360ME</p>

            <div className='part5_info'>
          <div className='part5_info_header'>
            <h3>Comprehensive Biomarker Analysis</h3>
            <div className='part5_info_header_img' onClick={() => handleDropClick('biomarker')}>
              <img src={drop} alt="drop" />
            </div>
          </div>

          {openSection === 'biomarker' && (
            <div className='part5_info_hiden'>
              <p>Our biomarker analysis is designed to provide a detailed evaluation of your body's unique needs. We analyze a wide range of biomarkers, 
                including hormone levels, inflammation markers, nutrient levels, and more.</p>
              <p>By measuring these biomarkers, we can identify potential health risks for chronic diseases, including heart disease, metabolic disorders, 
                and cancers and provide personalized recommendations to optimize your health.</p>
              <button className='bookFreeCall'>Book my call now!</button>
            </div>
          )}
        </div>

            <div className='part5_info'>
                <div className='part5_info_header'>
                    <h3>Full-Body MRI Scan</h3>
                    <div className='part5_info_header_img' onClick={() => handleDropClick('mri')}>
                        <img src={drop} />
                    </div>
                </div>                
                {openSection === 'mri' && (
            <div className='part5_info_hiden'>
              <p>Our biomarker analysis is designed to provide a detailed evaluation of your body's unique needs. We analyze a wide range of biomarkers, 
                including hormone levels, inflammation markers, nutrient levels, and more.</p>
              <p>By measuring these biomarkers, we can identify potential health risks for chronic diseases, including heart disease, metabolic disorders, 
                and cancers and provide personalized recommendations to optimize your health.</p>
              <button className='bookFreeCall'>Book my call now!</button>
            </div>
          )}
            </div>

            <div className='part5_info'>
                <div className='part5_info_header'>
                    <h3>Advanced Cardiac Risk Assessment</h3>
                    <div className='part5_info_header_img'  onClick={() => handleDropClick('assessment')}>
                        <img src={drop} />
                    </div>
                </div>  
                
                {openSection === 'assessment' && (
            <div className='part5_info_hiden'>
              <p>Our biomarker analysis is designed to provide a detailed evaluation of your body's unique needs. We analyze a wide range of biomarkers, 
                including hormone levels, inflammation markers, nutrient levels, and more.</p>
              <p>By measuring these biomarkers, we can identify potential health risks for chronic diseases, including heart disease, metabolic disorders, 
                and cancers and provide personalized recommendations to optimize your health.</p>
              <button className='bookFreeCall'>Book my call now!</button>
            </div>
          )}
            </div>

            <div className='part5_info'>
                <div className='part5_info_header'>
                    <h3>Early Disease Screening with Genomic Tests</h3>
                    <div className='part5_info_header_img' onClick={() => handleDropClick('screening')}>
                        <img src={drop} />
                    </div>
                </div>  
                
                {openSection === 'screening' && (
            <div className='part5_info_hiden'>
              <p>Our biomarker analysis is designed to provide a detailed evaluation of your body's unique needs. We analyze a wide range of biomarkers, 
                including hormone levels, inflammation markers, nutrient levels, and more.</p>
              <p>By measuring these biomarkers, we can identify potential health risks for chronic diseases, including heart disease, metabolic disorders, 
                and cancers and provide personalized recommendations to optimize your health.</p>
              <button className='bookFreeCall'>Book my call now!</button>
            </div>
          )}
            </div>

            <div className='part5_info'>
                <div className='part5_info_header'>
                    <h3>Gut Microbiome Analysis</h3>
                    <div className='part5_info_header_img' onClick={() => handleDropClick('analysis')}>
                        <img src={drop} />
                    </div>
                </div>  
                
                {openSection === 'analysis' && (
            <div className='part5_info_hiden'>
              <p>Our biomarker analysis is designed to provide a detailed evaluation of your body's unique needs. We analyze a wide range of biomarkers, 
                including hormone levels, inflammation markers, nutrient levels, and more.</p>
              <p>By measuring these biomarkers, we can identify potential health risks for chronic diseases, including heart disease, metabolic disorders, 
                and cancers and provide personalized recommendations to optimize your health.</p>
              <button className='bookFreeCall'>Book my call now!</button>
            </div>
          )}
            </div>

            <div className='part5_info'>
                <div className='part5_info_header'>
                    <h3>DEXA Scan (Bone Density Scan)</h3>
                    <div className='part5_info_header_img' onClick={() => handleDropClick('dexa')}>
                        <img src={drop} />
                    </div>
                </div>  
                
                {openSection === 'dexa' && (
            <div className='part5_info_hiden'>
              <p>Our biomarker analysis is designed to provide a detailed evaluation of your body's unique needs. We analyze a wide range of biomarkers, 
                including hormone levels, inflammation markers, nutrient levels, and more.</p>
              <p>By measuring these biomarkers, we can identify potential health risks for chronic diseases, including heart disease, metabolic disorders, 
                and cancers and provide personalized recommendations to optimize your health.</p>
              <button className='bookFreeCall'>Book my call now!</button>
            </div>
          )}
            </div>

        </div>

        <div className='part6'>
            <h2>Disease Free Life Implies Longer Healthier Life!</h2>

            <h3>Where do I Start?</h3>

            <div className='part6_img'></div>

            <div className='part6_step step1'>
                <div className='number'>
                    <h2>1</h2>
                </div>
                <p>Select your plan</p>
                <p>We learn about your health goals and our expert counsellors will help you choose a plan that’s most apt for you.</p>
            </div>

            <div className='part6_step step2'>
                <div className='number'>
                    <h2>2</h2>
                </div>
                
                <p>Schedule your sample collection</p>
                <p>You can schedule a time that’s convenient for you and have your sample collected from the comfort of your hime.</p>
            </div>

            <div className='part6_step step3'>
                <div className='number'>
                    <h2>3</h2>
                </div>
                
                <p>Get your health analysis along with a free counselling session + A Personalised Action Plan</p>
                <p>Receive your test report and get a personalised guidance based on your goals and specific to your health.</p>
            </div>

            <div className='part6_step step4'>
                <div className='number'>
                    <h2>4</h2>
                </div>
                
                <p>Consult</p>
                <p>Connect with leading healthcare specialists, including nutritionists, physiologists, doctors and sleep specialists.</p>
            </div>

            <div className='part6_step step5'>
                <div className='number'>
                    <h2>5</h2>
                </div>
                
                <p>Reassess by Retesting</p>
                <p>Every 3 to 6 months, you can update your test data to learn about your progress and continue working on or recalibrate your action plan
                     based on the results.</p>
            </div>

            <button>explore plans now!</button>
        </div>


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

        <Footer />
        </>
    )
}

export default Plans











