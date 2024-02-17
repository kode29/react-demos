import { createRoot } from "react-dom/client"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import './App.css';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Hero /> */}
      <Card />
    </div>
  );
}


//ReactDOM.render(<App />, createdocument.getElementById("root"))
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)