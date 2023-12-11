import React from 'react';
import { start } from '../../components/constant';
import '../../styles/Plans/PlansStart.css';

function Plans6() {
  return (
    <div className='part_start'>
        <div className='part_start_header'>
            <h2>Disease Free Life Implies Longer Healthier Life!</h2>
            <h3>Where do I Start?</h3>
        </div>

      <div className='part_start_img'></div>

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

export default Plans6;

