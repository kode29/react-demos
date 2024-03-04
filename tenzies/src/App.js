import React from 'react'
import Header from "./components/Header"
import DieBox from "./components/DieBox"
import Roll from "./components/Roll"

import { customAlphabet } from 'nanoid/non-secure'; 

import './App.css';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10); 


export default function App() {

  const [dice, setdice] = React.useState(allNewDice())
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
      // let nextDice = { 
      //   value: Math.ceil(Math.random() * 6), 
      //   isHeld: false ,
      //   id: nanoid()
      // }
      newDice.push( generateNewDie() )
    }
    // console.log(newDice)
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
    // setdice(allNewDice())
    // console.log("Roll New Dice")
    setdice(oldValue => {
      return oldValue.map((die)=>{
        return die.isHeld ?
          die : 
          generateNewDie()
      })
    })
  }

  function toggleHold(id){
    // console.log(id, " Clicked")
    setdice(oldValue => {
      return oldValue.map((die)=>{
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    })
  }

  // React.useEffect(() => {
  //   setdice(allNewDice())
  // }, dice)

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
      <Header />
      <div className="diceContainer">
          { diceElements }
      </div>
      <Roll text="Roll" handleClick={rollDice}/>
    </main>
  );
}
