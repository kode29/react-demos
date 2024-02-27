import React from "react"

export default function WindowTracker() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth(){
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        // Set it
        window.addEventListener("resize", watchWidth)

        // Cleanup function
        return () => {
            console.log("Cleaing up...")
            window.removeEventListener("resize", watchWidth)
        }
      }, [])

    return (
        <h1>Window width: {windowWidth}</h1>
    )
}
