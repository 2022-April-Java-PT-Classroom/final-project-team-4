import React, { useState } from 'react';
import style from './style.module.scss';
import Modal from "react-modal";

const Footer = () => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.footer}>
      <div className={style.small}>
        <small>
          <button onClick={scrollToTop}>Return to Top of the Page </button>
          <span className={style.copyright}>| &copy; Footopolis 2022 |</span>
          <button onClick={toggleModal}>Disclaimer</button>
        </small>
      </div>

      <div className={style.disclaimer}>
        <Modal className={style.modal} overlayClassName={style.overlay} isOpen={isOpen} onRequestClose={toggleModal} contentLabel='Disclaimer'>
          <h3>
            THIS WEBSITE DOES NOT PROVIDE MEDICAL ADVICE
          </h3>
          <p>
            The information, including but not limited to, text, graphics, images 
            and other material contained on this website are for informational 
            purposes only. No material on this site is intended to be a substitute 
            for professional medical advice, diagnosis or treatment. Always seek 
            the advice of your physician or other qualified healthcare provider 
            with any questions you may have regarding a medical condition or 
            treatment and before undertaking a new health care regimen, and never 
            disregard professional medical advice or delay in seeking it because 
            of something you have read on this website.
          </p>
          <div className={style.close}>
            <button onClick={toggleModal}>&times;</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Footer;