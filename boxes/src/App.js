import React from "react"
import boxes from "./boxes"

import css from "./App.css"

export default function App(props) {

  console.log(`Dark Mode: ${props.darkMode}`)
  
  const [boxesArray, setBoxesArray] = React.useState(boxes)

  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  }

  const boxesElements = boxesArray.map(box => (
    <div style={styles} className="box" key={box.id}>{box.id}</div>
  ))

    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    return (
        <main>
            {/* <h1>Boxes will go here</h1> */}
            <div className="boxGrid">
              {boxesElements}
            </div>
        </main>
    )
}
