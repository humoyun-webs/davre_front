import React from "react";
import { useState, useEffect } from "react";
import "./style.scss";
// import Menus from "../../component/menu/index"
import Content from '../../localization/content.js';

const Statistics = ({ setLang, lang }) => {
  const langs = Content[lang];
  const { statistic } = langs;
  //   const [stats, setStats] = useState([]);

  //   useEffect(() => {
  //     const GetStats = async () => {
  //       const res = await fetch("http://localhost:5555/api/get/statik", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       const data = await res.json();
  //       setStats(data);

  //     };
  //     GetStats();
  //   }, []);

  return (
    <div className="statistics py-5  my-5 ">
      <div className="container">
        <h1 className="stat">stats</h1>
        <ul className="statis__list d-flex list-unstyled align-items-start text-center gap-5 justify-content-center m-0">
          <li className="statis__list__item">
            <span>
              <h2 className=" fs-1">12</h2>
              <p className="text-dark">{statistic.CountAll}</p>
            </span>
          </li>
          <li className="statis__list__item">
            <span>
              <h2 className=" fs-1">12</h2>
              <p className="text-dark">{statistic.CountAllRegister}</p>
            </span>
          </li>
          <li className="statis__list__item">
            <span>
              <h2 className=" fs-1">12</h2>
              <p className="text-dark">{statistic.CountAllApply}</p>
            </span>
          </li>
        </ul>
      </div>
    
    </div>
  );
};

export default Statistics;