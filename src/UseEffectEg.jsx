import React, { useEffect, useState } from 'react'

function UseEffectEg() {
    const [first,setfirst]=useState("Hey");
    useEffect(() => {
      alert("welcome to my page");
        
      
    }, [first])
    
  return (
    <div>
        <h1>{first}</h1>
        <button onClick={()=>setfirst("hello")}>change</button>
        </div>
  )
}

export default UseEffectEg