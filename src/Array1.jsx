import React from 'react'

function Array1() {
    const emp = [{name: "John", salary:50000},{name:"Joy",salary:40000},{name:"Jacob",salary:20000}];
  const obj={name:"abc"}
    return (
    <div>
        {emp.map((display)=>
        <h1>{display.name} {display.salary}</h1>
        
        )}
<h2>{obj.name}</h2>
    </div>
  )
}

export default Array1