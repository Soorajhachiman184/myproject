import logo from './logo.svg';
import './App.css';

function App() {
    return ( 
      <div className = "App" >

        <b> More Actions</b>  
        <select id = "myList" onchange = "favTutorial()" >  
        <option> View </option>  
        <option> Edit </option>  
        <option> Send </option>  
        <option style={{color:"red"}}> Delete </option>  
    
        </select> 
<br />
<br />
        <b> More Actions</b>  
        <select id = "myList" onchange = "favTutorial()" >  
        <option> View </option>  
        <option> Edit </option>  
        <option> Send </option>  
        <option style={{color:"red"}}> Delete </option>  
    
        </select> 
        <b> More Actions</b>  
        <select id = "myList" onchange = "favTutorial()" >  
        <option> View </option>  
        <option> Edit </option>  
        <option> Send </option>  
        <option style={{color:"red"}}> Delete </option>  
    
        </select> 
        </div>
    );
}

export default App;