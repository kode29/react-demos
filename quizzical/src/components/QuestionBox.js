import React from "react";

export default function QuestionBox(props) {
  // console.log("<QUESTIONBOX>")
  // console.log(props)

  function setBtnColor(option, optionId) {
    // console.log("Set Button Color")
    // console.log(`CorrectAnswer: ${props.correctAnswer} | OPTION: ${option} | OPTIONID: ${optionId} | SelectedAnswer: ${props.selectedAnswer}`)
    // console.log(`SHOW ANSWERS: ${props.showAnswers}`)
    if (props.showAnswers) {
      if (props.correctAnswer === option) {
        console.log("CORRECT")
        return { backgroundColor: "#94D7A2" };
      } else if (props.selectedAnswer === optionId) {
        return { backgroundColor: "#F8BCBC" };
      } else {
        return { backgroundColor: "white" };
      }
    } else {
      return props.selectedAnswer === optionId
        ? { backgroundColor: "#D6DBF5" }
        : { backgroundColor: "white" };
    }
  }

  const answerOptions = props.answers.map((option, optionId) => {
    return (
      <div
        onClick={() => props.selectAnswer(optionId, props.id)}
        className="option"
        style={setBtnColor(option, optionId)}
        key={optionId}
      >
        {option}
      </div>
    );
  });

  return (
    <div className="questionBox">
      <div className="questionBox--question">{props.question}</div>
      <div className="questionBox--answers">{answerOptions}</div>
    </div>
  );
}
