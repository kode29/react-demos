import React from 'react'
import Question from "./Question"
import {nanoid} from "nanoid"

export default function Quiz(props){
    // console.log("THE QUESTIONS ARE")
    // const questions = JSON.parse(props.questions);
    // console.log(props)

    const questionBox = props.questions.map(question => {
        return (
            <Question 
                key={nanoid()}
                {...question}
            />
        )                  
    })

    return (
        <div className="quizBox">
            <div className="quizBox--grid">
                { questionBox }
            </div>
            {
                props.checkedAnswers ? 
                    <button onClick={props.restartQuiz}>Restart</button>  :
                    <button onClick={props.checkAnswers}>Check Answers</button>
            }
        </div>
    )
}