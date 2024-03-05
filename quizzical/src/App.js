import React from "react"
import "./App.css"

import Title from "./components/Title"
import Quiz from "./components/Quiz"

import data from "./data"

export default function App(){

  const [roundCounter, setRoundCounter] = React.useState(0)
  const [questions, setQuestions] = React.useState({})
  const [userAnswers, setUserAnswers] = React.useState([])
  const [isCheckedAnswers, setIsCheckedAnswers] = React.useState(false)
  
  let containerClass = "container";
  containerClass += roundCounter > 0 ? " quizActive" : ""

  React.useEffect(() => {
    // fetch(`https://opentdb.com/api.php?amount=5&difficulty=easy`)
    //     .then(res => res.json())
    //     .then(data => setQuestions(data.results))

        setQuestions(data[0].results)

        // console.log("Fetched Questions")
        // console.log(questions)
        console.log(`Round Counter: ${roundCounter}`)
  }, [roundCounter])

  function startQuiz(){
    console.log("START QUIZ")
    setRoundCounter(oldValue => oldValue + 1)
  }

  function checkAnswers(){
    console.log("Check answers")
  }

  return (
    <div className={containerClass}>
      <div className="blobs">
        <div className="yellowBlob"></div>
        <div className="blueBlob"></div>
      </div>
      {roundCounter > 0 ? 
        <Quiz 
          chcekedAnswers={isCheckedAnswers} 
          questions={questions} 
          checkAnswers={checkAnswers} 
          restartQuiz={startQuiz} 
        /> :
        <Title handleClick={startQuiz}/>
      }
    </div>
  )
}