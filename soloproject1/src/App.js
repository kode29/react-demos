import { createRoot } from "react-dom/client"

import Info from "./components/Info"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

import './App.css';

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interests/>
      <Footer />
    </div>
  );
}

//ReactDOM.render(<Page />, createdocument.getElementById("root"))
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)