import React from 'react'

function Props6({first,setfirst}) {
    console.log(first);

  return (
    <div>
        {first.map((dis)=>(
            <h4>{dis.name}{dis.age}</h4>
        ))}
    </div>
    
  )
}

export default Props6