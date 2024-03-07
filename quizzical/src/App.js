import React from "react"
import "./App.css"

import Start from "./components/Start"
import Quiz from "./components/Quiz"

import data from "./data"

export default function App(){

const [showStartScreen, setShowStartScreen] = React.useState(true)
  
function startGame(){
  setShowStartScreen(false)
}
function restartGame(){
  setShowStartScreen(true)
}

let containerClass = "container";
containerClass += !showStartScreen ? " quizActive" : ""


  return (
    <div className={containerClass}>
      <div className="blobs">
        <div className="yellowBlob"></div>
        <div className="blueBlob"></div>
      </div>
      { showStartScreen ? <Start startGame={() => startGame()}/> : <Quiz restartGame={() => restartGame()} /> }
      </div>
      
  )
}