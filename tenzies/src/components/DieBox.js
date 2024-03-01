import React from "react"

export default function DieBox(props) {
    
    const heldClass = props.isHeld ? "hold" : ""

    // console.log("isHeld: ", props.isHeld)
    return (
      <div className={`dice--item ${heldClass}`} onClick={props.handleClick}>
          <h2 className="dice--item_num">{props.value}</h2>
      </div>
    );
  }
  