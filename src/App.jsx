import React from 'react';
import "./App.css"
import MainPage from "./pages/main_page/index"

import { BrowserRouter, Routes,Route, Navigate } from "react-router-dom";


const App = () => {
  return (
    <>
    <BrowserRouter>
     <MainPage/>
     </BrowserRouter>
    </>
  );
};

export default App;