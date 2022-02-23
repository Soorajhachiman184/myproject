import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [selectedBox, setselectedBox] = useState("");
  const dropdownchange = (event) => {
    setselectedBox(event.target.value);
  };

  const StatesIN = [
    "KA", "KL", "MH","TN",
  ];      
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
      <div className = "App" >

        <b> More Actions</b>  
        <select id = "myList" onchange = "favTutorial()" >  
        <option> View </option>  
        <option> Edit </option>  
        <option> CA </option>  
        <option style={{color:"red"}}> Delete </option>  
    
        </select> 
<br />
<br />
<br />
<br />
    
<div>

		<select onChange={dropdownchange}>
			<option>Choose...</option>
			<option>IN</option>
			<option>US</option>
			<option>CA</option>
		</select>
		</div>
		<div>
		<select>
			{
			/** This is where we have used our options variable */
			options
			}
		</select>
        </div>
        </div>
    );
}

export default App;