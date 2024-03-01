import React from "react"

export default function Roll(props) {
    return (
      <button className="roll" onClick={props.handleClick}>
          {props.text}
      </button>
    );
  }
  