import React from "react"
import boxes from "./boxes"
import Box from "./components/Box"

import css from "./App.css"

export default function App() {

  // const [darkMode, setDarkMode] = React.useState("false")
  // console.log(`Dark Mode: ${darkMode}`)

  const [boxesArray, setBoxesArray] = React.useState(boxes)

  const boxesElements = boxesArray.map(box => (
    // <div style={styles} className="box" key={box.id}>{box.id}</div>
    <Box on={box.on} key={box.id} id={box.id}/>
  ))

  // function toggleDarkMode(){
  //   console.log("Toggle Dark Mode")
  //   setDarkMode(darkState => !darkState) 
  // }

    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */

    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

    return (
        <main>
            {/* <h1>Boxes will go here</h1> */}
            <div className="boxGrid">
              {boxesElements}
              {/* <button onClick={toggleDarkMode}>Toggle Dark Mode</button> */}
            </div>
            
        </main>
    )
}
