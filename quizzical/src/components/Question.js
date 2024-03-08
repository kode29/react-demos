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

// function answerQClick(q, a){
//     console.log("Answer Q Clicked!")
//     console.log(`Q: ${q} | A: ${a}`)
// }

export default function Question(props){
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