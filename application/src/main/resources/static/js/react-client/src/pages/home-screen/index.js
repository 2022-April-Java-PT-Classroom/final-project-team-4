import React from 'react';
import style from './style.module.scss';

const HomeScreen = () => {

  return (
    <div className={style.homeScreen}>
      <h2>Welcome to Footpolis</h2>
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
    </div>
  );
}

export default HomeScreen;