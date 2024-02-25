import React from "react"

import css from "./App.css"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(id){
        setIsShown(prevState => !prevState)
            // {
            // return prevState.map((show)=>{
            //     return show.id === id ? {...show}
            // })
            // return prevState = 
        // })
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>Show Punchline</button>
            <hr />
        </div>
    )
}