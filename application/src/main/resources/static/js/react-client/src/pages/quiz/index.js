import React, { Component } from 'react';
import { render } from 'react-dom';
import style from './style.module.scss';

class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      pain: '', 
      swell: '', 
      numb: '', 
      corn: '',
      protrusion: '', 
      mobility: '', 
      burn: '', 
      weak: '', 
      tendon: '',
      sensitive: '',
      flat: '', 
      rock: '', 
      shin: ''
    };
  }

// function addPoint(choice) {
//   if(choice == "plant") {
//     ailments["Plantar Fasciitis"]++;
//   }

//   if(choice == "dia") {
//     ailments["Diabetic Neuropathy"]++;
//   }

//   if(choice == "sup") {
//     ailments["Supination"]++;
//   }

//   if(choice == "pro") {
//     ailments["Pronation"]++;
//   }

//   if(choice == "heel") {
//     ailments["Heel Spur"]++;
//   }

//   if(choice == "ham") {
//     ailments["Hammertoe"]++;
//   }

//   if(choice == "bun") {
//     ailments["Bunion"]++;
//   }

//   if(choice == "mor") {
//     ailments["Morton Neuroma"]++;
//   }
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
render() {
  return (
    <div className={style.quiz}>
      <h2>Foot Ailment Quiz</h2>
      <p>Take this quiz if you are experiencing any unusual foot-related symptoms to see what we think might be the likeliest issue.</p>

      <form onSubmit={this.onSubmit}>
        <h3>Are you experiencing constant pain?</h3>
        <input type="radio" name="pain" 
              checked={this.state.pain === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="pain"
              checked={this.state.pain === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have any swelling?</h3>
        <input type="radio" name="swell"
              checked={this.state.swell === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="swell" 
              checked={this.state.swell === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Are you experiencing any numbness or tingling sensation in your feet?</h3>
        <input type="radio" name="numb" 
              checked={this.state.numb === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="numb" 
              checked={this.state.numb === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have any corns or calluses on your feet?</h3>
        <input type="radio" name="corn" 
              checked={this.state.corn === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="corn" 
              checked={this.state.corn === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have a protrusion on your foot?</h3>
        <input type="radio" name="protrusion" 
              checked={this.state.protrusion === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="protrusion" 
              checked={this.state.protrusion === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have limited joint mobility?</h3>
        <input type="radio" name="mobility" 
              checked={this.state.mobility === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="mobility" 
              checked={this.state.mobility === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have a burning sensation in your feet?</h3>
        <input type="radio" name="burn" 
              checked={this.state.burn === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="burn" 
              checked={this.state.turn === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Are you experiencing any muscle weakness in your feet?</h3>
        <input type="radio" name="weak" 
              checked={this.state.weak === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="weak" 
              checked={this.state.weak === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have a tight Achilles tendon?</h3>
        <input type="radio" name="tendon" 
              checked={this.state.tendon === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="tendon" 
              checked={this.state.tendon === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Are your feet sensitive to touch?</h3>
        <input type="radio" name="sensitive" 
              checked={this.state.sensitive === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="sensitive" 
              checked={this.state.sensitive === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have flat feet?</h3>
        <input type="radio" name="flat" 
              checked={this.state.flat === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="flat" 
              checked={this.state.flat === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you experience a sensation of having a rock under your foot when standing?</h3>
        <input type="radio" name="rock" 
              checked={this.state.rock === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="rock" 
              checked={this.state.rock === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have a sprain or shin splints?</h3>
        <input type="radio" name="shin" 
              checked={this.state.shin === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="shin" 
              checked={this.state.shin === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />
        <br />
        <button type="submit">Get Results</button>
      </form>

      {/* // {
      //   Object.entries(ailments).map(([key, val]) => 
      //     <p key={key}>{key}: {val}</p>
      //   )
      // } */}
    </div>
  );
}
}

export default Quiz;