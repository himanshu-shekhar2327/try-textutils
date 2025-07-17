// import logo from './logo.svg';
// import { useState } from 'react';
import { Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React , {useState} from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  const [mode , setMode] = useState('light'); //Whether dark Mode is enabled or not
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      msg : message,
      type : type
  })
    setTimeout(() => {
      setAlert(null);
    } , 1500);

  }
  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background ='#042743';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.background ='white';
      showAlert("Light Mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode"
    }
  }
  return (
    <>
        {/* <Navbar title = "Textutils2"/> */}

        {/* <Navbar title = "Textutils" mode = {mode} toggleMode ={toggleMode}/>
        <Alert alert ={alert}/>
        <div className="container my-3">
          <TextForm showAlert ={showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
              <About /> */}
    <Router>  
        <Navbar title = "Textutils" mode = {mode} toggleMode ={toggleMode}/>
        <Alert alert ={alert}/>
        <div className="container my-3">
        <Routes>
             < Route exact path="/" element={<TextForm showAlert ={showAlert} heading = "Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode = {mode}/>}/> 
            <Route exact path="/About" element={<About  mode ={mode}/>} />
              {/* <About />    */}
        </Routes>
        </div>
    </Router>      
    </>
  );
}
export default App;
