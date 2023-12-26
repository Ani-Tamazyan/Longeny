import { useState } from "react";
import { label } from "../../helpers/utils/constant";

import "../../styles/Plans/PlansCheckbox.css";
import vector from "../../assets/images/VectorCheckbox.png";
import ellips from "../../assets/images/ellipse_check.png";
import check from "../../assets/images/check.svg";

function PlansCheckbox() {
  const [selectedCheckbox, setSelectedCheckbox] = useState(new Set());

  const handleCheckboxClick = (id) => {
    setSelectedCheckbox((prevSelected) => {
      const newSet = new Set(prevSelected);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="part_checkbox">
      <img src={ellips} alt="ellips" className="part_checkbox_ellips"/>
      <h2 className="part_checkbox_h">
        The Most Comprehensive Biomarker Analysis
      </h2>

      <p className="part_checkbox_p">
        Your membership will include 120+ lab tests and consultations with
        leading doctor{"'"}s in respective fields.
      </p>

      <div className="checkbox_cont">
        <div className="checkbox">
          <ul>

            {label.map(({ id, label }) => {
              return (
                <li key={id}>
                  <input
                    type="checkbox"
                    value={label}
                    className="checkbox_input"
                    onClick={() => handleCheckboxClick(id)}
                  />
                  <img
                    src={check}
                    alt="check"
                    className={`check ${selectedCheckbox.has(id) ? "visible" : ""}`}
                  />
                  <div
                    className="checkbox_label"
                    onClick={() => handleCheckboxClick(id)}
                  >
                    <label htmlFor={label}>{label}</label>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <img src={vector} alt="vector" className="checkbox_background_img" />

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


