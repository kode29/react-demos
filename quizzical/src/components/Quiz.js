import React from 'react'
import Question from "./Question"
import {nanoid} from "nanoid"

export default function Quiz(props){
    // console.log("THE QUESTIONS ARE")
    // const questions = JSON.parse(props.questions);
    // console.log(props)

    const questionBox = props.questions.map(question => {
        // const questionKey = nanoid();
        // const ac = props.answerClick(questionKey)
        return (
            <Question 
                key={question.id} 
                // answerClick={()=>ac}
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