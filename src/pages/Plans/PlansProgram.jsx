import { useState } from "react";

import { data } from "../../helpers/utils/constant";
import "../../styles/Plans/PlansProgram.css";

import drop from "../../assets/images/drop.png";
import vector from "../../assets/images/VectorProgram.png";

function PlansProgram() {
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
      <div className="part_program">
        <h2>
          360ME from LONGENY. India’s First Subscription Based Comprehensive
          Health Assessment Program
        </h2>
        <p>Here’s What you Get with 360ME</p>

        {data.map((section, index) => (
          <div
            className="part_program_info"
            key={index}
            onClick={() => handleDropClick(index)}
          >
            <div className="part_program_info_header">
              <h3>{section.header}</h3>
              <div
                className={`part_program_info_header_img ${
                  openSection === index ? "rotate" : ""
                }`}
              >
                <img src={drop} alt="drop" />
              </div>
            </div>

            {openSection === index && (
              <div className="part_program_info_hiden">
                <p>{section.text1}</p>
                <p>{section.text2}</p>
                <button className="book_free_call">{section.book}</button>
              </div>
            )}
          </div>
        ))}

        <img src={vector} alt="vector" className="program_background_img" />
      </div>
    </>
  );
}

export default PlansProgram;
