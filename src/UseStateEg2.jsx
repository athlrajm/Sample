import React, { useState } from 'react'

function UseStateEg2() {
    const [first, setfirst] = useState(0)
   
    const Hello=()=>{
        if(first<=0)
        {
            alert("sorry");
        }
        else{
            setfirst(first-1);
        }  
    }
  return (
    <div>
        <p>My num is {first}</p>
        <button onClick={()=>setfirst(first+1)}>increment</button>
        <button onClick={Hello}>decrement</button>
    </div>
  )

}

export default UseStateEg2