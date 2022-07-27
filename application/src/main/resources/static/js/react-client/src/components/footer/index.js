import React from 'react';
import style from './style.module.scss';

const Footer = () => {
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className={style.footer}>
      <div className={style.small}>
        <small>
          <button onClick={scrollToTop}>Return to Top of the Page </button>| 
              &copy; Footopolis 2022 | <button>Disclaimer</button>
        </small>
      </div>
    </div>
  );
}

export default Footer;