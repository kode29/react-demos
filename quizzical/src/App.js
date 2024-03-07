import React from "react"
import "./App.css"

import Title from "./components/Title"
import Quiz from "./components/Quiz"

import data from "./data"

import { customAlphabet } from 'nanoid/non-secure'; 
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10); 

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
        setQuestions(oldValue => {
          return oldValue.map((question)=>{
            return question.id == null ? {...question, id: nanoid()} : question.id
          })
        })

        // console.log("Fetched Questions")
        // console.log(questions)
        console.log(`Round Counter: ${roundCounter}`)
  }, [roundCounter])

  function startQuiz(){
    console.log("START QUIZ")
    setRoundCounter(oldValue => oldValue + 1)
    console.log(questions)
  }

  function checkAnswers(){
    console.log("Check answers")
    console.log(questions)
    console.log(userAnswers)
  }

  // function answerClick(questionId, answerValue){
  //   console.log("Answer is clicked")
  //   setUserAnswers(oldValue => {
  //     return oldValue.map((question)=>{
  //       return question.id == questionId ? {...question, answer: answerValue} : question
  //     })
  //   })
  // }

  return (
    <div className={containerClass}>
      <div className="blobs">
        <div className="yellowBlob"></div>
        <div className="blueBlob"></div>
      </div>
      {roundCounter > 0 ? 
        <Quiz 
          checkedAnswers={isCheckedAnswers} 
          questions={questions} 
          checkAnswers={checkAnswers} 
          restartQuiz={startQuiz} 
        /> :
        <Title handleClick={startQuiz}/>
      }
    </div>
  )
}