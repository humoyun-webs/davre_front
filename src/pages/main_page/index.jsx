import React, { useState } from 'react';
import "./style.scss"
import Header from "../../component/header/index.jsx"
import Firstpage from "../first_page/index"
import Footer from "../../component/footer/index"
import Project from "../project_page/index"
import Rest from "../rest_page/index" 
import Login from "../login/index"
import Userinfo from "../user_info/index"



import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom";

const index = () => {
    const [language, setlanguage] = useState('ru');
    return (
   
        <div className="first_page">
          <Header setLang={setlanguage} lang={language} />
          <Routes>
            
           <Route  path="/" element={<Firstpage/>}/>
           <Route path="project" element={<Project/>}/>
           <Route path="rest" element={<Rest/>}/>
           <Route path="login" element={<Login/>} />
           <Route path="user-info" element={<Userinfo/>} />
           
          </Routes>
          {/* <FirstPage />  */}



          {/* <Search /> */}
          <Footer />
          
          

          
        </div>
        
    );
};

export default index;