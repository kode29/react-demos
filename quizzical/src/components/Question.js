import React from 'react'

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

export default function Question(props){
        return (
            <div className="questionBox">
                <div className="questionBox--question">
                    {props.question}
                </div>
                <div className="questionBox--answers">
                    {
                    // TODO: Tasks pending completion -@kyle at 3/5/2024, 3:03:21 AM
                    // Group all answers together and shuffle
                    }
                    {props.correct_answer}
                </div>
            </div>  
        )                  
}