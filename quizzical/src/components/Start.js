import React from 'react'

export default function Start(props){
    return (
        <div className="titleBox">
            <h1>Quizzical</h1>
            <p>Try your best at a few sample quiz questions</p>
            <button onClick={props.startGame}>Start Quiz</button>
        </div>
    )
}