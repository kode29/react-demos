import {useState} from "react"
import { createRoot } from "react-dom/client"

import './App.css';


export default function App() {

const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])
// [variable, setterFunction] = useState(default values)

function addItem(){
  setThingsArray(prevState => {
    return [...prevState, `Thing ${prevState.length + 1}`]
  })
  /*
    NOTE: -@kyle at 2/24/2024, 8:16:22 PM
    
    ...prevState is an ARRAY SREAD to include all of the existing array
    
    setThingsArray(prevState => [...newArray, `new item`]) can be done on one line
      If multiple lines
      setThingsArray(prevState => {
        return etc
      }

    The variable `thingsElements` is iterated BELOW and will update when modified (power of React)
  */
}

const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
// Note: All elements created by an array need a `key`

  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        {thingsElements}
    </div>
  );
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)