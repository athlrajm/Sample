import React from 'react'

function Props2({first,ob,setfirst}) {
console.log(first);
console.log(ob.emp);

  return (
    <div>
      {first.map((display)=> ( 
      <h2>{display.name}{display.age}</h2>

    ))}
    <h1>
        {ob.emp}{ob.salary}
    </h1>
    </div>
      
  )
  
}

export default Props2