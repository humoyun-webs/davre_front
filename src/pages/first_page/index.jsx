import React, { useState } from 'react';
import "./style.scss"
import Intro from "../../component/intro/index"
import Stats from "../../component/statistik/index"
import Table from "../../component/table/index"
import Contactus from "../../component/contact_us/index"
import Search from "../../component/search/index"
import Table2 from "../../component/table2/index"
import Menus from "../../component/menu/index"





import { BrowserRouter, Routes,Route,Router, Navigate } from "react-router-dom";

const index = () => {
    const [language, setlanguage] = useState('ru');
    return (
    //  <BrowserRouter>
        <div className="first_page">
          
      <Intro setLang={setlanguage} lang={language}/>
<Stats setLang={setlanguage} lang={language}/>
<Menus />
{/* <Search setLang={setlanguage} lang={language}/> */}
        
          {/* <Routes>
            
            <Route path='/' element={<Table  setLang={setlanguage} lang={language}/>} />
            <Route path='menu2' element={<Table2  setLang={setlanguage} lang={language}/>}  />
           
          </Routes> */}
         
     <Contactus setLang={setlanguage} lang={language}/>



          {/* <Search /> */}
          {/* <Footer /> */}
          
          {/* <Search /> */}

          
        </div>
    //  </BrowserRouter>
    );
};

export default index;