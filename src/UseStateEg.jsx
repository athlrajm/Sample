import React, { useState } from 'react'

function UseStateEg() {
    const [first, setfirst] = useState("Athul")
  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>{setfirst("abc")}}>click me</button>
    </div>
  )
}

export default UseStateEg