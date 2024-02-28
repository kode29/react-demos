import React from 'react'

import Navbar from "./components/Navbar"
import Main from "./components/Main";

import './App.css';

export default function App() {

  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode(){
    setDarkMode(prevState => !prevState)
    console.log(`Dark Mode: ${darkMode}`)
  }


  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </div>    
  );
}
