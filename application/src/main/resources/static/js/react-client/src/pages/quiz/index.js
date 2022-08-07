import React, { Component } from 'react';
import { render } from 'react-dom';
import style from './style.module.scss';

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

let totalPoints = 0;

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
    
    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

addPoint = () => {
  if(this.state.pain == "yes") {
    ailments["Plantar Fasciitis"]++;
    ailments["Diabetic Neuropathy"]++;
    ailments["Supination"]++;
    ailments["Pronation"]++;
    ailments["Heel Spur"]++;
    ailments["Hammertoe"]++;
    ailments["Morton Neuroma"]++;
  }

  if(this.state.swell == "yes") {
    ailments["Plantar Fasciitis"]++;
    ailments["Diabetic Neuropathy"]++;
    ailments["Supination"]++;
    ailments["Heel Spur"]++;
    ailments["Hammertoe"]++;
    ailments["Bunion"]++;
    ailments["Morton Neuroma"]++;
  }

  if(this.state.numb == "yes") {
    ailments["Plantar Fasciitis"]++;
    ailments["Diabetic Neuropathy"]++;
    ailments["Morton Neuroma"]++;
  }

  if(this.state.corn == "yes") {
    ailments["Supination"]++;
    ailments["Pronation"]++;
    ailments["Hammertoe"]++;
    ailments["Bunion"]++;
  }

  if(this.state.protrusion == "yes") {
    ailments["Heel Spur"]++;
    ailments["Bunion"]++;
  }

  if(this.state.mobility == "yes") {
    ailments["Hammertoe"]++;
    ailments["Bunion"]++;
  }

  if(this.state.burn == "yes") {
    ailments["Diabetic Neuropathy"]++;
    ailments["Heel Spur"]++;
  }

  if(this.state.weak == "yes") {
    ailments["Diabetic Neuropathy"]++;
  }

  if(this.state.tendon == "yes") {
    ailments["Plantar Fasciitis"]++;
  }

  if(this.state.sensitive == "yes") {
    ailments["Diabetic Neuropathy"]++;
  }

  if(this.state.flat == "yes") {
    ailments["Pronation"]++;
  }

  if(this.state.rock == "yes") {
    ailments["Morton Neuroma"]++;
  }

  if(this.state.shin == "yes") {
    ailments["Supination"]++;
  }
}

calculatePercentages = () => {
  totalPoints = 
    ailments["Plantar Fasciitis"]+
    ailments["Diabetic Neuropathy"]+
    ailments["Supination"]+
    ailments["Pronation"]+
    ailments["Heel Spur"]+
    ailments["Hammertoe"]+
    ailments["Bunion"]+
    ailments["Morton Neuroma"];

    ailments["Plantar Fasciitis"] = (ailments["Plantar Fasciitis"] / totalPoints) * 100;
    ailments["Diabetic Neuropathy"] = (ailments["Diabetic Neuropathy"] / totalPoints) * 100;
    ailments["Supination"] = (ailments["Supination"] / totalPoints) * 100;
    ailments["Pronation"] = (ailments["Pronation"] / totalPoints) * 100;
    ailments["Heel Spur"] = (ailments["Heel Spur"] / totalPoints) * 100;
    ailments["Hammertoe"] = (ailments["Hammertoe"] / totalPoints) * 100;
    ailments["Bunion"] = (ailments["Bunion"] / totalPoints) * 100;
    ailments["Morton Neuroma"] = (ailments["Morton Neuroma"] / totalPoints) * 100;
}

onRadioChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

onSubmit = (e) => {
  e.preventDefault();
  this.addPoint();
  this.calculatePercentages();
  this.setState(ailments);
}

render() {
  return (
    <div className={style.quiz}>
      <h2>Foot Ailment Quiz</h2>
      <p>Take this quiz if you are experiencing any unusual foot-related symptoms to see what we think might be the likeliest issue.</p>

      <form onSubmit={this.onSubmit}>
        <h3>Are you experiencing constant pain?</h3>
        <input type="radio" name="pain" value="yes" 
              checked={this.state.pain === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="pain" value="no" 
              checked={this.state.pain === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have any swelling?</h3>
        <input type="radio" name="swell" value="yes" 
              checked={this.state.swell === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="swell" value="no" 
              checked={this.state.swell === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Are you experiencing any numbness or tingling sensation in your feet?</h3>
        <input type="radio" name="numb" value="yes" 
              checked={this.state.numb === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="numb" value="no" 
              checked={this.state.numb === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have any corns or calluses on your feet?</h3>
        <input type="radio" name="corn" value="yes" 
              checked={this.state.corn === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="corn" value="no" 
              checked={this.state.corn === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have a protrusion on your foot?</h3>
        <input type="radio" name="protrusion" value="yes" 
              checked={this.state.protrusion === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="protrusion" value="no" 
              checked={this.state.protrusion === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have limited joint mobility?</h3>
        <input type="radio" name="mobility" value="yes" 
              checked={this.state.mobility === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="mobility" value="no" 
              checked={this.state.mobility === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have a burning sensation in your feet?</h3>
        <input type="radio" name="burn" value="yes" 
              checked={this.state.burn === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="burn" value="no" 
              checked={this.state.burn === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Are you experiencing any muscle weakness in your feet?</h3>
        <input type="radio" name="weak" value="yes" 
              checked={this.state.weak === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="weak" value="no" 
              checked={this.state.weak === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have a tight Achilles tendon?</h3>
        <input type="radio" name="tendon" value="yes" 
              checked={this.state.tendon === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="tendon" value="no" 
              checked={this.state.tendon === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Are your feet sensitive to touch?</h3>
        <input type="radio" name="sensitive" value="yes" 
              checked={this.state.sensitive === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="sensitive" value="no" 
              checked={this.state.sensitive === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have flat feet?</h3>
        <input type="radio" name="flat" value="yes" 
              checked={this.state.flat === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="flat" value="no" 
              checked={this.state.flat === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you experience a sensation of having a rock under your foot when standing?</h3>
        <input type="radio" name="rock" value="yes" 
              checked={this.state.rock === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="rock" value="no" 
              checked={this.state.rock === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />

        <h3>Do you have a sprain or shin splints?</h3>
        <input type="radio" name="shin" value="yes" 
              checked={this.state.shin === "yes"} 
              onChange={this.onRadioChange}/>
        <label for="yes">Yes</label><br />
        <input type="radio" name="shin" value="no" 
              checked={this.state.shin === "no"} 
              onChange={this.onRadioChange}/>
        <label for="no">No</label><br />
        <br />
        <div className={style.submit}>
          <button type="submit">Get Results</button>
        </div>
      </form>

      <hr />

      <div className={style.results}>
        <h3>Results:</h3>
        <p>The higher the percentage, the greater the chance of this being your issue.
          However, this is a not a diagnosis.
        </p>

        <div className={style.ailmentsList}>
          {
            Object.entries(ailments).map(([key, val]) => 
              <p key={key}>{key}: {val}%</p>
            )
          }
        </div>
      </div>
    </div>
  );
}
}

export default Quiz;