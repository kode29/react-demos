import { createRoot } from "react-dom/client"

import Header from "./components/Header"
import Meme from "./components/Meme"
import Output from "./components/Output"

import './App.css';

export default function App() {

  return (
    <div className="container">
      <Header />
      <Meme />
      <Output />
    </div>
  );
}


//ReactDOM.render(<App />, createdocument.getElementById("root"))
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)