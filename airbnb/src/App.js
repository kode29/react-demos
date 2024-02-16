import { createRoot } from "react-dom/client"

import Hero from "./components/Hero"
import Grid from "./components/Grid"

import './App.css';

export default function App() {
  return (
    <div className="container">
      <Hero />
      <Grid />
    </div>
  );
}


//ReactDOM.render(<App />, createdocument.getElementById("root"))
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)