import React from 'react';

import { start } from '../../components/constant';
import '../../styles/Plans/PlansStart.css';
import zig from "../../assets/images/zig.png"

function PlansStart() {
  return (
    <div className='part_start'>
        <div className='part_start_header'>
            <h2>
              <span>Disease Free Life</span>
              <span>Implies Longer Healthier Life!</span>
            </h2>
            <h3>Where do I Start?</h3>
        </div>

      <img src={zig} alt="zig" className='part_start_img' />

      <div className='steps'>
        {start.map((step, index) => (
          <div key={index} className={`part_start_step step${index + 1}`}>
            <div className='number'>
              <h2>{step.h2}</h2>
            </div>
            <p>{step.p1}</p>
            <p>{step.p2}</p>
          </div>
        ))}
      </div>

      <button>explore plans now!</button>
    </div>
  );
}

export default PlansStart;

