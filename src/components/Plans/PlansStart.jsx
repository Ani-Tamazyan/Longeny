import { start } from '../../helpers/utils/constant';

import zig from "../../assets/images/zig.png"

function PlansStart() {
  return (
    <div className='part_start padding'>
        <div className='part_start_header'>
            <h2>
              <span>Disease Free Life</span>
              <span>Implies Longer Healthier Life!</span>
            </h2>
            <h3>Where do I Start?</h3>
        </div>

      <div className='part_start_img_wrapper'>
        <img src={zig} alt="zig" className='part_start_img' />

        <div className='steps'>
          {start.map(({id, h2, p1, p2}) => (
            <div key={id} className={`part_start_step step${id}`}>
              <div className='number'>
                <h2>{h2}</h2>
              </div>
              <p>{p1}</p>
              <p>{p2}</p>
            </div>
          ))}
        </div>
      </div>

      <button>explore plans now!</button>
    </div>
  );
}

export default PlansStart;


