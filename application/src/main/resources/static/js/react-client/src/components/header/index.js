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
        <button className={style.dropbtn}>Foot Information</button>
        <div className={style.dropdownContent}>
          <a href="#">Foot Ailments</a>
          <a href="#">Foot Massage Techniques</a>
          <a href="#">Foot Injury Quiz</a>
          <a href="#">Podiatrist Locator</a>
        </div>
      </div>

      <div className={style.dropdown}>
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