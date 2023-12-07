import React, { useState } from 'react';
import "../../styles/Plans/PlansProgram.css";
import drop from "../../assets/images/drop.png";
import data from '../../components/constant';

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

      {data.map((section, index) => (
        <div className='part5_info' key={index}>
          <div className='part5_info_header'>
            <h3>{section.header}</h3>
            <div className='part5_info_header_img' onClick={() => handleDropClick(index)}>
              <img src={drop} alt="drop" />
            </div>
          </div>

          {openSection === index && (
            <div className='part5_info_hiden'>
              <p>{section.text1}</p>
              <p>{section.text2}</p>
              <button className='book_free_call'>{section.book}</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Plans5;

