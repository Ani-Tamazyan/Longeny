import React, { useState } from 'react'

import "../../styles/Plans/Plans5.css"

import drop from "../../../assets/images/drop.png";

function Plans5() {
    const [openSection, setOpenSection] = useState(null);
    
    const handleDropClick = (section) => {
      if (openSection === section) {  
        setOpenSection(null);
      } else {     
        setOpenSection(section);
      }
    };
  
    return (
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
              <button className='book_free_call'>Book my call now!</button>
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
              <button className='book_free_call'>Book my call now!</button>
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
              <button className='book_free_call'>Book my call now!</button>
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
              <button className='book_free_call'>Book my call now!</button>
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
              <button className='book_free_call'>Book my call now!</button>
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
              <button className='book_free_call'>Book my call now!</button>
            </div>
          )}
            </div>

        </div>
    )
}

export default Plans5
