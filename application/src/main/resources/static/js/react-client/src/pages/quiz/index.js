import React from 'react';
import style from './style.module.scss';

const Quiz = () => {

function addPoint(choice) {
  if(choice == "plant") {
    ailments["Plantar Fasciitis"]++;
  }

  if(choice == "dia") {
    ailments["Diabetic Neuropathy"]++;
  }

  if(choice == "sup") {
    ailments["Supination"]++;
  }

  if(choice == "pro") {
    ailments["Pronation"]++;
  }

  if(choice == "heel") {
    ailments["Heel Spur"]++;
  }

  if(choice == "ham") {
    ailments["Hammertoe"]++;
  }

  if(choice == "bun") {
    ailments["Bunion"]++;
  }

  if(choice == "mor") {
    ailments["Morton Neuroma"]++;
  }
}

const ailments = {
  "Plantar Fasciitis":0,
  "Diabetic Neuropathy":0, 
  "Supination":0, 
  "Pronation":0, 
  "Heel Spur":0, 
  "Hammertoe":0, 
  "Bunion":0, 
  "Morton Neuroma":0
}

  return (
    <div className={style.quiz}>
      <h2>Foot Ailment Quiz</h2>
      <p>Take this quiz if you are experiencing any unusual foot-related symptoms to see what we think might be the likeliest issue.</p>

      <h3>Are you experiencing constant pain?</h3>
      <input type="radio" name="pain" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="pain" />
      <label for="no">No</label><br />

      <h3>Do you have any swelling?</h3>
      <input type="radio" name="swell" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="swell" />
      <label for="no">No</label><br />

      <h3>Are you experiencing any numbness or tingling sensation in your feet?</h3>
      <input type="radio" name="numb" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="numb" />
      <label for="no">No</label><br />

      <h3>Do you have any corns or calluses on your feet?</h3>
      <input type="radio" name="corn" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="corn" />
      <label for="no">No</label><br />

      <h3>Do you have a protrusion on your foot?</h3>
      <input type="radio" name="protrusion" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="protrusion" />
      <label for="no">No</label><br />

      <h3>Do you have limited joint mobility?</h3>
      <input type="radio" name="mobility" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="mobility" />
      <label for="no">No</label><br />

      <h3>Do you have a burning sensation in your feet?</h3>
      <input type="radio" name="burn" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="burn" />
      <label for="no">No</label><br />

      <h3>Are you experiencing any muscle weakness in your feet?</h3>
      <input type="radio" name="weak" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="weak" />
      <label for="no">No</label><br />

      <h3>Do you have a tight Achilles tendon?</h3>
      <input type="radio" name="tendon" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="tendon" />
      <label for="no">No</label><br />

      <h3>Are your feet sensitive to touch?</h3>
      <input type="radio" name="sensitive" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="sensitive" />
      <label for="no">No</label><br />

      <h3>Do you have flat feet?</h3>
      <input type="radio" name="flat" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="flat" />
      <label for="no">No</label><br />

      <h3>Do you experience a sensation of having a rock under your foot when standing?</h3>
      <input type="radio" name="rock" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="rock" />
      <label for="no">No</label><br />

      <h3>Do you have a sprain or shin splints?</h3>
      <input type="radio" name="shin" />
      <label for="yes">Yes</label><br />
      <input type="radio" name="shin" />
      <label for="no">No</label><br />
      <br />
      <button>Get Results</button>

      {
        Object.entries(ailments).map(([key, val]) => 
          <p key={key}>{key}: {val}</p>
        )
      }
    </div>
  );
}

export default Quiz;