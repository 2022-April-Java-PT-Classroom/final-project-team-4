import React from 'react';
import style from './style.module.scss';

const Quiz = () => {
// addPoint = (ailment) => {
//   ailments.ailment++;
// }

// const ailments = {
//   "Plantar Fasciitis":0,
//   "Diabetic Neuropathy":0, 
//   "Supination":0, 
//   "Pronation":0, 
//   "Heel Spur":0, 
//   "Hammertoe":0, 
//   "Bunion":0, 
//   "Morton Neuroma":0
// }

return (
  <div className={style.quiz}>
    <h2>Foot Ailment Quiz</h2>
    <p>Take this quiz if you are experiencing any unusual foot-related symptoms to see what we think might be the likeliest issue.</p>

    <h3>If you are experiencing constant pain, where on your feet is it located?</h3>
    <input type="radio" />
    <label for="heel">Heel</label><br />
    <input type="radio" />
    <label for="arch">Arch</label><br />
    <input type="radio" />
    <label for="ankle">Ankle</label><br />
    <input type="radio" />
    <label for="ball">Ball</label><br />
    <input type="radio" />
    <label for="toe">Toe (or between toes)</label><br />
    <input type="radio" />
    <label for="everywhere">Everywhere</label><br />
    <input type="radio" />
    <label for="none">I am not in constant pain or the pain comes and goes</label><br />

    <h3>If you are experiencing swelling, where on your feet is it located?</h3>
    <input type="radio" />
    <label for="heel">Heel</label><br />
    <input type="radio" />
    <label for="arch">Joint</label><br />
    <input type="radio" />
    <label for="ankle">Between toes</label><br />
    <input type="radio" />
    <label for="none">I do not appear to be swelling anywhere</label><br />

    <h3>Are you experiencing any numbness or tingling sensation in your feet?</h3>
    <input type="radio" />
    <label for="yes">Yes</label><br />
    <input type="radio" />
    <label for="no">No</label><br />

    <h3>Do you have any corns or calluses on your feet?</h3>
    <input type="radio" />
    <label for="yes">Yes</label><br />
    <input type="radio" />
    <label for="no">No</label><br />

    <h3>Do you have a protrusion on your foot?</h3>
    <input type="radio" />
    <label for="yes">Yes</label><br />
    <input type="radio" />
    <label for="no">No</label><br />

    <h3>Do you have limited joint mobility?</h3>
    <input type="radio" />
    <label for="yes">Yes</label><br />
    <input type="radio" />
    <label for="no">No</label><br />

    <h3>Do you have a burning sensation in your feet?</h3>
    <input type="radio" />
    <label for="yes">Yes</label><br />
    <input type="radio" />
    <label for="no">No</label><br />

    <h3>Are you experiencing any muscle weakness in your feet?</h3>
    <input type="radio" />
    <label for="yes">Yes</label><br />
    <input type="radio" />
    <label for="no">No</label><br />

    <h3>Do you have a tight Achilles tendon?</h3>
    <input type="radio" />
    <label for="yes">Yes</label><br />
    <input type="radio" />
    <label for="no">No</label><br />

    <h3>Are your feet sensitive to touch?</h3>
    <input type="radio" />
    <label for="yes">Yes</label><br />
    <input type="radio" />
    <label for="no">No</label><br />

    <h3>Do you have flat feet?</h3>
    <input type="radio" />
    <label for="yes">Yes</label><br />
    <input type="radio" />
    <label for="no">No</label><br />

    <h3>Do you experience a sensation of having a rock under your foot when standing?</h3>
    <input type="radio" />
    <label for="yes">Yes</label><br />
    <input type="radio" />
    <label for="no">No</label><br />

    <h3>Do you have a sprain or shin splints?</h3>
    <input type="radio" />
    <label for="yes">Yes</label><br />
    <input type="radio" />
    <label for="no">No</label><br />
    <br />
    <button>Get Results</button>
  </div>
);

}

export default Quiz;