import React from 'react'
import Header from "./components/Header"
import DieBox from "./components/DieBox"
import Roll from "./components/Roll"

import './App.css';

export default function App() {
  return (
    <main>
      <Header />
      <div className="diceContainer">
        <DieBox value="1"/>
        <DieBox value="2"/>
        <DieBox value="3"/>
        <DieBox value="4"/>
        <DieBox value="5"/>
        <DieBox value="6"/>
        <DieBox value="7"/>
        <DieBox value="8"/>
        <DieBox value="9"/>
        <DieBox value="0"/>
      </div>
      <Roll />
    </main>
  );
}
