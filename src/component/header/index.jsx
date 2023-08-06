import React, { useState, useRef } from 'react';
import './style.scss';
import logo from '../../assets/gerb.svg';
import RU from '../../assets/ru.png';
import UZ from '../../assets/uz.png';
import  {NavLink}  from 'react-router-dom';   
import Content from '../../localization/content.js';

const index = ({ setLang, lang }) => {
  const langs = Content[lang];
  const { navbar } = langs;
  return (
    <>
      <header>
        <div className="container">
          <div className="left_section">
            <img src={logo} alt="logo" />
            <h3>Kochmas mulk</h3>
          </div>
          <ul className="center">
          <NavLink className="link" to={"/"}><li className="nav_li"><a className='nav-link'>{navbar.MainPage}</a></li></NavLink>
          <NavLink className="link" to={"project"}><li className="nav_li"><a className='nav-link'>Loyiha haqida</a></li></NavLink>
          <NavLink className="link" to={"rest"}><li className="nav_li"><a className='nav-link'>Rest</a></li></NavLink>
          </ul> 
    
          <div className="rigth_section d-flex gap-5 ">
            <img src={lang === 'ru' ? RU : UZ} width="22" height="22" alt="" />
            <select
              name="lang"
              id="lang"
              className="setLang"
              onChange={(e) => {
                setLang(e.target.value);
              }}
            >
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
              
            </select>
            <NavLink  to={"login"}>
              <h5 >Login</h5>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
