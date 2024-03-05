import React from "react"
import "./App.css"

import Title from "./components/Title"
import Quiz from "./components/Quiz"

export default function App(){

  const [quizStart, setQuizStart] = React.useState(false)
  const [questions, setQuestions] = React.useState([])
  const [userAnswers, setUserAnswers] = React.useState([])
  

  let containerClass = "container";
  containerClass += quizStart ? " quizActive" : ""

  function startQuiz(){
    setQuizStart(true)
  }

  return (
    <div className={containerClass}>
      <div className="blobs">
        <div className="yellowBlob"></div>
        <div className="blueBlob"></div>
      </div>
      {quizStart ? <Quiz /> : <Title startQuiz={startQuiz}/>}
    </div>
  )
}