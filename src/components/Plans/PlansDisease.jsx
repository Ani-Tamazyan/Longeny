import organ1 from "../../assets/images/organ1.png";
import organ2 from "../../assets/images/organ2.png";
import organ3 from "../../assets/images/organ3.png";
import organ4 from "../../assets/images/organ4.png";
import ellipse from "../../assets/images/elipse.png";
import vector from "../../assets/images/VectorDisease.png";
import dashed1 from "../../assets/images/dashed1.png";
import dashed2 from "../../assets/images/dashed2.png";
import dashed3 from "../../assets/images/dashed3.png";

function PlansDisease() {
  return (
    <div className="part_disease padding">
      <h2>The 4 Spectres of Chronic Disease</h2>

      <img src={vector} alt="vector" className='disease_background_img' />

      <div className="part_disease_content">
      <div className="part_disease_organ1_wrapper">
          <img src={organ1} alt="organ1" className="organ1_img" />
          <img src={dashed1} alt="dashed1" className="dashed1" />
          <img src={dashed2} alt="dashed2" className="dashed2" />
          <img src={dashed3} alt="dashed3" className="dashed3" />

          <div className="part_disease_organ1_cont">
            <p>METABOLIC DISEASE</p>
          </div>
      </div>


      <div className="part_disease_organ">

      <div className="part_disease_organ2_wrapper">
        <img src={organ2} alt="organ2" className="organ2_img" />
        <img src={ellipse} alt="dot" className="dot1" />

          <div className="part_disease_organ2_cont">
          <p>
              Atherosclerotic Disease
              <span>(Cardiovascular Disease, Cerebrovascular Disease)</span>
            </p>
          </div>
      </div>

      <div className="part_disease_organ3_wrapper">
        <img src={organ3} alt="organ3" className="organ3_img" />
        <img src={ellipse} alt="dot" className="dot2" />

          <div className="part_disease_organ3_cont">
            <p>Neuro Degenerative Disease</p>
          </div>
      </div>

      </div>


      <div className="part_disease_organ4_wrapper">
        <img src={organ4} alt="organ4" className="organ4_img" />
        <img src={ellipse} alt="dot" className="dot3" />

          <div className="part_disease_organ4_cont">
            <p>Cancer</p>
          </div>
      </div>
      </div>
    </div>
  );
}

export default PlansDisease;
