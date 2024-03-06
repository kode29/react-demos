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
    const listOfAnswers = [];
    listOfAnswers.push(props.correct_answer);
    props.incorrect_answers.map(item => listOfAnswers.push(item))
    
    listOfAnswers.sort(() => Math.random() - 0.5); // Shuffle the array
    console.log(listOfAnswers);

    const answers = listOfAnswers.map(item => {
        return (
          <div className="option">{item}</div>
        )
      })    

        return (
            <div className="questionBox">
                <div className="questionBox--question">
                    {props.question}
                </div>
                <div className="questionBox--answers">
                    {answers}
                </div>
            </div>  
        )                  
}