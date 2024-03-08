import React from "react";
import "./App.css";

import Start from "./components/Start";
import Quiz from "./components/Quiz";

// import data from "./data";

export default function App() {
  const [roundCounter, setRoundCounter] = React.useState(0);
  const [showStartScreen, setShowStartScreen] = React.useState(true);
  const [questions, setQuestions] = React.useState([]);
  const [showAnswers, setShowAnswers] = React.useState(false);
  const [score, setScore] = React.useState(0);

  function startGame() {
    setShowStartScreen(false);
    setRoundCounter((previous) => previous + 1);
  }
  function restartGame() {
    setShowStartScreen(true);
    setShowAnswers(false);
  }

  function selectAnswer(optionId, questionId) {
    if (!showAnswers) {
      // console.log(`SELECTED ANSWER: ${optionId} ON ${questionId}`)
      setQuestions((prevQuestions) =>
        prevQuestions.map((question, id) => {
          return questionId === id
            ? { ...question, selectedAnswer: optionId }
            : question;
        })
      );
    }
  }

  function doCheckAnswers() {
    setShowAnswers(true);
  }

  // Get a random set of questions using the OpenTDB API
  // Render/shuffle the answers upon initial load
  // ONLY Run if we have a new "round" (roundCounter++)
  React.useEffect(() => {
    // console.log("Effect ran");
    fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy`)
          .then(res => res.json())
          .then(data => setQuestions(
            data[0].results.map((question) => {
              return ({
                question: question.question,
                answers: question.incorrect_answers
                  .concat([question.correct_answer])
                  .sort(() => Math.random() - 0.5),
                correctAnswer: question.correct_answer,
                selectedAnswer: undefined,
              });
            })
          )
        )
    
    // console.log(questions);
    setScore(0);

    // Need to parse answers so the order isn't re-shuffled every load and only on Effect
  }, [roundCounter]);

  // Show Correct/Incorrect Answers triggered by showAnswers

  React.useEffect(() => {
    // console.log("CHECKING ANSWERS")
    for (const question of questions) {
      if (
        question.correctAnswer === question.answers[question.selectedAnswer]
      ) {
        setScore((oldScore) => oldScore + 1);
      }
    }
  }, [showAnswers]);

  let containerClass = "container";
  containerClass += !showStartScreen ? " quizActive" : "";

  return (
    <div className={containerClass}>
      <div className="blobs">
        <div className="yellowBlob"></div>
        <div className="blueBlob"></div>
      </div>
      {showStartScreen ? (
        <Start startGame={() => startGame()} />
      ) : (
        <Quiz
          selectAnswer={selectAnswer}
          showAnswers={showAnswers}
          checkAnswers={() => doCheckAnswers()}
          questions={questions}
          restartGame={() => restartGame()}
          score={score}
        />
      )}
    </div>
  );
}
