import React from 'react';
import "./style.scss"
import Content from '../../localization/content.js';
import img1 from "../../assets/instagram.png"




const index = ({ setLang, lang }) => {
  const langs = Content[lang];
  const { intro } = langs;
  return (
    <>
      <div className="intro">
        <div className="container">
          <div className="texts">
            <h1>{intro.MainPage}</h1>
            <button className="btn1">{intro.btn}</button>
            <div className="small_text">
              <p>{intro.Rest}</p>
              <img src={img1} alt="" width="32px" />
              <img src={img1} alt="" width="32px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;