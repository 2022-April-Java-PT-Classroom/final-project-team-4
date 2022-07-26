import React from 'react';
import style from './style.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <h1>
        <span className={style.bigger}>F</span>ootopolis
      </h1>
      <nav>

      <div className={style.dropdown}>
        <button className={style.dropbtn} id={style.firstBtn}>Foot Problems</button>
        <div className={style.dropdownContent}>
          <a href="#">Injuries</a>
          <a href="#">Growths</a>
          <a href="#">Diseases</a>
        </div>
      </div>

      <div className={style.dropdown}>
        <button className={style.dropbtn}>Foot Solutions</button>
        <div className={style.dropdownContent}>
          <a href="#">Conventional Treatments</a>
          <a href="#">Alternative Treatments</a>
          <a href="#">Foot Massage Techniques</a>
        </div>
      </div>

      <div className={style.dropdown}>
        <button className={style.dropbtn}>Your Feet</button>
        <div className={style.dropdownContent}>
          <a href="#">Foot Injury Quiz</a>
          <a href="#">Local Podiatrist Locator</a>
        </div>
      </div>

      <div className={style.dropdown} id={style.lastBtn}>
        <button className={style.dropbtn}>About Us</button>
        <div className={style.dropdownContent}>
          <a href="#">Contact Us</a>
          <a href="#">Meet the Developers</a>
        </div>
      </div>

      </nav>
    </div>
  );
}

export default Header;