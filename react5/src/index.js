import { createRoot } from "react-dom/client"

import styles from "./main.css"

import Header from "./Header"

function MainContent(){
    return (
        <main>
            <h1>Why React is Fun</h1>
            <ol>
                <li>It's a popular library, so I can fit in with the cool kids</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
                <li>Reason #3</li>
                <li>Reason #4</li>
            </ol>
        </main>
    )
}

function Footer(){
    return (
        <footer>
            <small>&copy; 2024 - <a href="https://educodewithkp.com">EduCode with KP</a> | All rights reserved</small>
        </footer>
    )
}

function Page(){
    return (
    <div>
        <Header />
        <MainContent />
        <Footer />
    </div>
    )
}

//ReactDOM.render(<Page />, createdocument.getElementById("root"))
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<Page />)
