import React from "react"

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

    const [boxProps, setBoxProps] = React.useState(props)

    console.log(boxProps)

    const styles = {
        backgroundColor: boxProps.on ? "#222222" : "transparent"
    }

    function toggleBackground(){
        console.log("Toggle Background")
        setBoxProps(prevBox => {
            return {
                ...boxProps,
                on: !boxProps.on
            }
        })
    }

      
    return (
        // <div style={styles} className="box" key={thisBox.id} onClick={toggleBackground}>{thisBox.id}</div>
        <div style={styles} className="box" key={boxProps.id} onClick={toggleBackground}>{boxProps.id}</div>
    )
}