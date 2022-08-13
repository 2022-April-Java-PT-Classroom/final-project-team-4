import React from 'react';
import feet from '../../assets/images/feet.jpg';
import podiatrist from '../../assets/images/podiatrist.jpg';
import sixFeet from '../../assets/images/sixfeet.jpg'
import quiz from '../../assets/images/quiz.jpg';
import style from './style.module.scss';

const HomeScreen = () => {

  return (
    <div className={style.homeScreen}>
      <div>
        <img src={sixFeet} className={style.heroImage}></img>
        <div className={style.centered}>Welcome to Footopolis</div>
      </div>
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
        <div className={style.footAilments}>
          <table className={style.imgLeft}>
            <tr>
              <td>
                <img src={feet} />
              </td>
              <td>
                <h3>Foot Ailments</h3>
                <p>
                  Having pain in your foot? Bumps on your feet? 
                  Something more unusual? Visit the foot ailments page 
                  for more information.
                </p>
                <button><a href='/ailment'>Learn More</a></button>
              </td>
            </tr>
          </table>
        </div>

        <div className={style.quiz}>
          <table className={style.imgRight}>
            <tr>
              <td>
                <h3>Take a Quiz</h3>
                <p>
                  Not sure if what you're experiencing is 
                  a foot injury listed here? Take our quiz 
                  to help you learn about your problem.
                </p>
                <button>Learn More</button>
              </td>
              <td>
                <img src={quiz} />
              </td>
            </tr>
          </table>
        </div>

        <div className={style.podiatrists}>
          <table className={style.imgLeft}>
            <tr>
              <td>
                <img src={podiatrist} />
              </td>
              <td>
                <h3>Find Podiatrists Near You</h3>
                <p>
                  We list a lot of information here, but 
                  it's always important to consult your 
                  doctor (and we are not doctors). Find one near you here.
                </p>
                <button><a href='/map'>Learn More</a></button>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;