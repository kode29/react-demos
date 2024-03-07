import React from 'react'

import { customAlphabet } from 'nanoid/non-secure'; 
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10); 

//     "results": [
//       {
//         "type": "boolean",
//         "difficulty": "easy",
//         "category": "Entertainment: Video Games",
//         "question": "In Resident Evil 4, the Chicago Typewriter has infinite ammo.",
//         "correct_answer": "True",
//         "incorrect_answers": [
//           "False"
//         ]
//       },

function answerClick(q, a){
    console.log("Answer Clicked!")
}

export default function Question(props){
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
          <div className="option" onClick={answerClick(props.id, item)}>{item}</div>
        )
    })    

    return (
        <div className="questionBox">
            <div className="questionBox--question"  key={props.id}>
                {props.question}
            </div>
            <div className="questionBox--answers">
                {answers}
            </div>
        </div>  
    )                  
}