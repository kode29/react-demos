import { createRoot } from "react-dom/client"
import "./main.css"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function App(){
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
root.render(<App />)
