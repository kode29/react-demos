import { createRoot } from "react-dom/client"

import Navbar from "./components/Navbar"
import Main from "./components/Main";

import './App.css';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>    
  );
}

// export default App;

//ReactDOM.render(<Page />, createdocument.getElementById("root"))
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)