import React from "react"

export default function App(){
  const [data, setData] = React.useState({})

  // 1. GET the data (fetch)
  // 2. Save the data to STATE

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}