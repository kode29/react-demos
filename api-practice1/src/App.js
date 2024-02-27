import React from "react"

export default function App(){
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(1)

  // 1. GET the data (fetch)
  // 2. Save the data to STATE

  // this is an (out)side effect as it access OUTSIDE information of React
  // fetch("https://swapi.dev/api/people/1")
  //   .then(res => res.json())
  //   .then(data => setStarWarsData(data))

    // fetch("https://swapi.dev/api/people/1")
    // .then(res => res.json())
    // .then(data => console.log(data))

    // side effects
    React.useEffect(() => {
      console.log("Effect ran")
      fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    }, [count])

  return (
    <div>
      <h1>Character #{count}: {starWarsData.name}</h1>
      {
        count > 1 && 
          <div>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Get Prev Character</button>
          </div>
      }
      <button onClick={()=>setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      
    </div>
  )
}