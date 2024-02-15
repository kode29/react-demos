import { createRoot } from "react-dom/client"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

import './App.css';

export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

//ReactDOM.render(<Page />, createdocument.getElementById("root"))
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)