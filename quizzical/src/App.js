import React from "react"
import "./App.css"

import Quiz from "./components/Quiz"

export default function App(){
  return (
    <div className="container">
      <div className="yellowBlob"></div>
      <div className="blueBlob"></div>
      <Quiz />
    </div>
  )
}