import React from 'react'
import Header from "./components/Header"
import DieBox from "./components/DieBox"
import Roll from "./components/Roll"

import { customAlphabet } from 'nanoid/non-secure'; 

import './App.css';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10); 


export default function App() {

  const [dieFace, setDieFace] = React.useState(allNewDice())

  function allNewDice(){
    const newDice = [];
    for (let i=0; i<10; i++){
      let nextDice = { 
        value: Math.ceil(Math.random() * 6), 
        isHeld: false ,
        id: nanoid()
      }
      newDice.push( nextDice )
    }
    // console.log(newDice)
    return newDice;
  }

  function rollDice(){
    // TODO: Tasks pending completion -@kyle at 3/1/2024, 3:35:20 AM
    // only roll on isHeld:false
    setDieFace(allNewDice())
  }

  function toggleHold(id){
    console.log(id, " Clicked")
    setDieFace(oldValue => {
      return oldValue.map((die)=>{
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    })
  }

  // React.useEffect(() => {
  //   setDieFace(allNewDice())
  // }, dieFace)

  const diceElements = dieFace.map((dice) => (
    <DieBox 
      key={dice.id} 
      value={dice.value} 
      isHeld={dice.isHeld}
      handleClick={()=>toggleHold(dice.id)}
    />
    )
  )

  return (
    <main>
      <Header />
      <div className="diceContainer">
          { diceElements }
      </div>
      <Roll text="Roll" handleClick={rollDice}/>
    </main>
  );
}
