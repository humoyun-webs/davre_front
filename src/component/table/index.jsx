import React from 'react';
import "./style.scss"
import Content from '../../localization/content.js';

import  {NavLink}  from 'react-router-dom';    



const index = ({ setLang, lang }) => {
  const langs = Content[lang];
  const { table } = langs;
  return (
    <div>
      <div className="table">
        <div className="container">
          <h1 className="text-center">{table.heading}</h1>/

          <hr />
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>{table.Company}</th>
                <th>{table.Gorod} </th>
                <th>{table.Domov}</th>
                <th>{table.Address} </th> 
                <th>{table.Telefon}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <NavLink to="user-info">Main</NavLink>
                </td>
                <td>MAin</td>
                <td>Main</td>
                <td>Main</td>
                <td>Main</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default index;