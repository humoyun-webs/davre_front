import React from 'react';
import "./style.scss"
import Content from "../../localization/content.js"



const index = ({ setLang, lang }) => {
    const langs = Content[lang];
  const { table2 } = langs;
    return (
        <div>
            <div className="table">
                <div className="container">
                    <h1 className='text-center'>{table2.heading}</h1>
                    
                    <hr/>
                <table>
        <thead>
        <tr>
            <th>No</th>
            <th>{table2.Company}</th>
            <th>{table2.Gorod}   </th>
            <th>{table2.Domov}</th>
            <th>{table2.Address}	</th>
            <th>{table2.Telefon}</th>
            
        </tr>
        </thead>
       <tbody>
       <tr>
            <td>1</td>
            <td><a href="#">Main</a></td>
            <td>MAin</td>
            <td>Main</td>
            <td>Main</td>
            <td>Main</td>
        </tr>
        <tr>
            <td>2</td>
            <td><a href="#">Main</a></td>
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