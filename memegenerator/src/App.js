import { createRoot } from "react-dom/client"

import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Output from "./components/Output"

import './App.css';

export default function App() {

  return (
    <div className="container">
      <Navbar />
      <Form />
      <Output />
    </div>
  );
}


//ReactDOM.render(<App />, createdocument.getElementById("root"))
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)