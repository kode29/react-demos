import { createRoot } from "react-dom/client"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

import data from "./data"

import './App.css';

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    )
  })

  return (
    <div className="container">
      <Navbar />
      {/* <Hero /> */}
      <section className="cardGrid">
        {cards}
      </section>
      
    </div>
  );
}


//ReactDOM.render(<App />, createdocument.getElementById("root"))
const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)