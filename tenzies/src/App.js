import React from 'react'
import Header from "./components/Header"
import DieBox from "./components/DieBox"
import Roll from "./components/Roll"
import Confetti from "react-confetti"

import { customAlphabet } from 'nanoid/non-secure'; 

import './App.css';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10); 


export default function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

  // Winning condition
  React.useEffect(()=> {
    // console.log("Dice State Changed")
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)

    if (allHeld && allSameValue){
      setTenzies(true)
      console.log("You Won!")
    }
  }, [dice])

  function allNewDice(){
    const newDice = [];
    for (let i=0; i<10; i++){
      newDice.push( generateNewDie() )
    }
    return newDice;
  }

  function generateNewDie(){
    return { 
        value: Math.ceil(Math.random() * 6), 
        isHeld: false ,
        id: nanoid()
      }
  }

  function rollDice(){
    if (tenzies){
      setDice(allNewDice())
      setTenzies(false)
    }
    else {
      setDice(oldValue => {
        return oldValue.map((die)=>{
          return die.isHeld ?
            die : 
            generateNewDie()
        })
      })
    }
  }

  function toggleHold(id){
    setDice(oldValue => {
      return oldValue.map((die)=>{
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    })
  }

  const diceElements = dice.map((dice) => (
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
      {tenzies && <Confetti />}
      <Header />
      <div className="diceContainer">
          { diceElements }
      </div>
      <Roll text={tenzies ? "New Game" : "Roll"} handleClick={rollDice}/>
    </main>
  );
}
