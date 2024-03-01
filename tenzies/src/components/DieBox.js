import React from "react"

export default function DieBox(props) {
    return (
      <div className="dice--item">
          <h2 className="dice--item_num">{props.value}</h2>
      </div>
    );
  }
  