import { useState } from "react";
import { label } from "../../helpers/utils/constant";

import "../../styles/Plans/PlansCheckbox.css";
import vector from "../../assets/images/VectorCheckbox.png";
import check from "../../assets/images/check.svg"


function PlansCheckbox() {
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxClick = (index) =>{
    setSelectedCheckbox(index === selectedCheckbox ? null : index)
  }

  return (
    <div className="part_checkbox">
      <h2 className="part_checkbox_h">
        The Most Comprehensive Biomarker Analysis
      </h2>

      <p className="part_checkbox_p">
        Your membership will include 120+ lab tests and consultations with
        leading doctor's in respective fields.
      </p>

      <div className="checkbox_cont">
        <div className="checkbox">
          <ul>
            {label.map((checkboxLabel, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  value={checkboxLabel}
                  className="checkbox_input"
                  onClick={() => handleCheckboxClick(index)}
                />
                <img src={check} alt="check" className={`check ${selectedCheckbox === index ? 'visible' : ''}`}/>
                <div className="checkbox_label" onClick={() => handleCheckboxClick(index)}>
                  <label htmlFor={checkboxLabel}>{checkboxLabel}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <img src={vector} alt="vector" className="checkbox_background_img" /> */}

      <div className="part4_button">
        <div className="button_1">
          <button className="book_free_call">Book your free call</button>
        </div>
        <div className="button_2">
          <button className="order">Order test</button>
        </div>
      </div>
    </div>
  );
}

export default PlansCheckbox;
