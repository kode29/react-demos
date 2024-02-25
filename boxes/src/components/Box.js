import React from "react"

function randomBackground(){
    const colors = ["red", "green", "blue", "yellow", "orange"]
    const randomNumber = Math.floor(Math.random() * colors.length)
    return colors[randomNumber]
}

export default function Box(props){
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */

    const styles = {
        // This is a good example of seeing the re-rendering of how React works
        // Enable this line and see the (active) boxes change colors!
        // backgroundColor: props.on ? randomBackground() : "transparent"
        backgroundColor: props.on ? "#222222" : "transparent"
    }
      
    return (
        // <div style={styles} className="box" key={thisBox.id} onClick={toggleBackground}>{thisBox.id}</div>
        <div 
            style={styles} 
            className="box" 
            key={props.content} 
            onClick={props.handleClick}
        >{props.content}</div>
    )
}