import React from 'react';
import feet from '../../assets/images/feet.jpg';
import massagehands from '../../assets/images/massagehands.jpg';
import sixFeet from '../../assets/images/sixfeet.jpg';
import quiz from '../../assets/images/quiz.jpg';
import style from './style.module.scss';
import { NavLink } from 'react-router-dom';

const HomeScreen = () => {

  return (
    <div className={style.homeScreen}>
      <div>
        <img src={sixFeet} className={style.heroImage}></img>
        <div className={style.centered}>Welcome to Footopolis</div>
      </div>
      <div className={style.homeContent}>
        <p>
          At Footpolis, our aim is to provide information and recommendations to help relieve various foot ailments. 
          Our feet are the driving force to get us from point A to point B, so it is important that they are in tip-top 
          condition at all times. Let us help you get to where you need to be!
        </p>
        <p className={style.disclaimer}>
          <span className={style.warning}>DISCLAIMER: THIS WEBSITE DOES NOT PROVIDE MEDICAL ADVICE.</span>
          <details>The information, including but not limited to, text, graphics, 
          images and other material contained on this website are for 
          informational purposes only. No material on this site is intended 
          to be a substitute for professional medical advice, diagnosis or 
          treatment. Always seek the advice of your physician or other qualified 
          healthcare provider with any questions you may have regarding a medical 
          condition or treatment and before undertaking a new health care regimen, 
          and never disregard professional medical advice or delay in seeking it 
          because of something you have read on this website.</details>
        </p>

        <section className={style.popularPages}>
          <div className={style.popularPageRight}>
                  <img src={feet} className={style.right} />
                  <h3>Foot Ailments</h3>
                  <p>
                    Having pain in your foot? Bumps on your feet? 
                    Something more unusual? Visit the foot ailments page 
                    for more information.
                  </p>
                  <button><NavLink to={'/ailment'}>Learn More</NavLink></button>
          </div>

          <div className={style.popularPageLeft}>
          <img src={quiz} className={style.left} />
                  <h3>Take a Quiz</h3>
                  <p>
                    Not sure if what you're experiencing is 
                    a foot injury listed here? Take our quiz 
                    to help you learn about your problem.
                  </p>
                  <button><NavLink to={'/quiz'}>Learn More</NavLink></button>
          </div>

          <div className={style.popularPageRight}>
                  <img src={massagehands} className={style.right} />
                  <h3>Learn Foot Massage Techniques</h3>
                  <p>
                    You'd be surprised how much a foot massage 
                    can help various foot ailments. We have video 
                    demonstrations for each kind of ailment.
                  </p>
                  <button><NavLink to={'/massage'}>Learn More</NavLink></button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomeScreen;