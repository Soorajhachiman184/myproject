import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes,Link  } from 'react-router-dom';
import "./App.css";
import Displayname from "./Displayname";

function Home() {
    const [selectedBox, setselectedBox] = useState("");
    const dropdownchange = (event) => {
      setselectedBox(event.target.value);
    };
  
    const StatesIN = ["KA", "KL", "MH", "TN"];
    const StatesUS = ["AL", "DE", "GA"];
    const StatesCA = ["ON", "QC", "BC"];
    let type = null;
    let options = null;
  
    if (selectedBox === "IN") {
      type = StatesIN;
    } else if (selectedBox === "US") {
      type = StatesUS;
    } else if (selectedBox === "CA") {
      type = StatesCA;
    }
  
    if (type) {
      options = type.map((el) => <option key={el}>{el}</option>);
    }
  
    
    return (
      <div className="App">
        {/* test1 */}
        <b> More Actions</b>
        <select id="myList" onchange="favTutorial()">
          <option> View </option>
          <option> Edit </option>
          <option> CA </option>
          <option style={{ color: "red" }}> Delete </option>
        </select>
        <br />
        <br />
        <br />
        <br />
    {/* test2 */}
        <div>
          <select onChange={dropdownchange}>
            <option>Choose...</option>
            <option>IN</option>
            <option>US</option>
            <option>CA</option>
          </select>
        </div>
        <div>
          <select>{options}</select>
        </div>


        <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Displayname">ProfileInfo</Link>
      </li>

    </ul>
      </div>
    );
  }

export default Home;
