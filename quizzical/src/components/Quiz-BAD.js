import React from 'react'
import Question from "./Question"
import {nanoid} from "nanoid"


function answerQClick(q, a){
    console.log("Answer Clicked FROM QUIZ")
}
export default function Quiz(props){

        const listOfAnswers = [];
        listOfAnswers.push(props.correct_answer);
        props.incorrect_answers.map(item => listOfAnswers.push(item))
        
        listOfAnswers.sort(() => Math.random() - 0.5); // Shuffle the array
        // // console.log(listOfAnswers);
        // const answerKeys = listOfAnswers.map(answer => {
        //     return answer.id == null ? {...answer, id: nanoid()} : answer.id
        // }) 
        // console.log(listOfAnswers)   
        
    
        const answers = listOfAnswers.map(item => {
            // const ac = props.answerClick(props.question.id, item);
            return (
              <div className="option" onClick={() => answerQClick(props.id, item)}>{item}</div>
            )
        })    
    
        function createQuestion (question, id, answers){
            return (
                <div className="questionBox">
                    <div className="questionBox--question"  key={id}>
                        {question}
                    </div>
                    <div className="questionBox--answers">
                        {answers}
                    </div>
                </div>  
            )
        }                  



    // console.log("THE QUESTIONS ARE")
    // const questions = JSON.parse(props.questions);
    // console.log(props)

    const questionBox = props.questions.map(question => {
        // const questionKey = nanoid();
        // const ac = props.answerClick(questionKey)
        return (
            createQuestion(question, question.id, question.answers)
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