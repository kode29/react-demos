import React from "react"


export default function Quiz(props){
    return (
        <div>
            Quiz<br/>
            <button onClick={props.restartGame}>Play Again</button>
        </div>
    )
}