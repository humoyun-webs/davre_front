import React from 'react';
import "./style.scss"
import { Link } from 'react-router-dom';

const index = () => {
    return (
        <>
             <div className="search-bar">
   
      <div className="search-form">
        <input type="text" placeholder="Qidirish so'zi" className="search-input" />
        <input type="text" placeholder="Joylashuvi" className="location-input" />
        <button className="btn btn-primary">Qidirish</button>
      </div>
    </div>

        </>
    );
};

export default index;