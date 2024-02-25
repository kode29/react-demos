import React from "react"
import boxes from "./boxes"
import Box from "./components/Box"

import css from "./App.css"

export default function App() {

  // const [darkMode, setDarkMode] = React.useState("false")
  // console.log(`Dark Mode: ${darkMode}`)

  const [boxesArray, setBoxesArray] = React.useState(boxes)

  
  function toggleBackground(id){
    console.log(`Toggle Background of ${id}`)

    setBoxesArray(prevBoxes => {
      // const newBoxes = [];
      // for (let i=0; i<prevBoxes.length; i++){
      //   const currentBox = prevBoxes[i]
      //   if (currentBox.id == id){
      //     const updatedBox = {
      //       ...currentBox,
      //       on: !currentBox.on
      //     }
      //     newBoxes.push(updatedBox)
      //   } else {
      //     newBoxes.push(currentBox)
      //   }
      // }
      // return newBoxes;
      return prevBoxes.map((square)=>{
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
}

const boxesElements = boxesArray.map(box => (
    // <div style={styles} className="box" key={box.id}>{box.id}</div>
    <Box 
      on={box.on} 
      key={box.id} 
      content={box.id}
      handleClick={()=>toggleBackground(box.id)}
    />
  ))
  
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
