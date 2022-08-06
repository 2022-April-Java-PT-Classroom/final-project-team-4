import React from 'react';
import { NavLink } from "react-router-dom";
import style from './style.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.trapezoid}></div>
      <h1>
        <NavLink to={'/'}>
          <span id={style.bigger}>F</span>ootopolis
        </NavLink>
      </h1>
      <nav>

      <div className={style.dropdown}>
        <button className={style.dropbtn} id={style.firstBtn}>Foot Problems</button>
        <div className={style.dropdownContent} id={style.green}>
          <NavLink to={'/ailment'}>Ailments</NavLink>
          <NavLink to={'/bad-practices'}>Bad Practices</NavLink>
        </div>
      </div>

      <div className={style.dropdown}>
        <button className={style.dropbtn}>Foot Solutions</button>
        <div className={style.dropdownContent} id={style.purple}>
          <NavLink to={'/ailment/:id'}>Conventional Treatments</NavLink>
          <NavLink to={'/alternative-treatments'}>Alternative Treatments</NavLink>
          <NavLink to={'/massage'}>Foot Massage Techniques</NavLink> 
        </div>
      </div>

      <div className={style.dropdown}>
        <button className={style.dropbtn}>Your Feet</button>
        <div className={style.dropdownContent} id={style.green}>
          <NavLink to={'/quiz'}>Foot Ailment Quiz</NavLink>
          <NavLink to={'/map'}>Local Podiatrist Locator</NavLink>
        </div>
      </div>

      <div className={style.dropdown}>
        <button className={style.dropbtn} id={style.lastBtn}>About Us</button>
        <div className={style.dropdownContent} id={style.lastDropdown}>
          <NavLink to={'/contact'}>Contact Us</NavLink>
          <NavLink to={'/about-us'}>Meet the Developers</NavLink>
        </div>
      </div>

      </nav>
    </div>
  );
}

export default Header;