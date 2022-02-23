import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes,Link  } from 'react-router-dom';
import "./App.css";


import Displayname from "./Displayname";
import Home from "./Home";


function App() {



  
  return (
    <div className="wrapper">

    <BrowserRouter>
        <Routes  >
          <Route path="/" element={<Home/>} />
          <Route path="/Displayname" element={<Displayname/>} />
         
        </Routes  >
 
    
    </BrowserRouter>


  </div>
  );
}

export default App;
