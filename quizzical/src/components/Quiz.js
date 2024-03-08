import React from "react";

import QuestionBox from "./QuestionBox";

export default function Quiz(props) {
  // console.log("<QUIZ>")
  // console.log(props)

  const listOfQuestions = props.questions.map((questionObj, ind) => {
    return (
      <QuestionBox
        key={ind}
        id={ind}
        {...questionObj}
        selectAnswer={props.selectAnswer}
        showAnswers={props.showAnswers}
      />
    );
  });

  const numberOfQuestions = props.questions.length;

  return (
    <div className="quizBox--grid">
      {listOfQuestions}
      {!props.showAnswers ? (
        <div className="playAgain--container">
          <button onClick={props.checkAnswers}>Check Answers</button>
        </div>
      ) : (
        <div className="playAgain--container">
          <div className="score">
            You scored {props.score}/{numberOfQuestions} correct answers
          </div>
          <button onClick={props.restartGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}
