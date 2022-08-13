import React from 'react';
import { NavLink } from "react-router-dom";
import style from './style.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <nav>
        <div className={style.title}>
          <NavLink to={'/'}>Footopolis
          </NavLink>
        </div>

        <div className={style.headerNav}>
        <div className={style.dropdown}>
          <button className={style.dropbtn} id={style.firstBtn}>Ailments & Treatments</button>
          <div className={style.dropdownContent} id={style.purple}>
            <NavLink to={'/ailment'}>Ailments & Suggested Treatment Options</NavLink>
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
        </div>

      </nav>
    </div>
  );
}

export default Header;