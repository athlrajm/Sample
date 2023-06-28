import React, { useState } from 'react'

function UseStateEg3() {
    const [first, setfirst] = useState("BLACK")
  return (
    <div>
        <div>
        <p>TEXT COLOR IS {first}</p>
        <button onClick={()=>{setfirst("RED")}}style = {{color:'red'}}>RED</button>
        <button onClick={()=>{setfirst("BLUE")}}style = {{color:'blue'}}>BLUE</button>
        <button onClick={()=>{setfirst("GREEN")}} style = {{color:'green'}}>GREEN</button>
        <button onClick={()=>{setfirst("YELLOW")}} style = {{color:'yellow'}}>YELLOW</button>
    </div>
    </div>
  )
}

export default UseStateEg3