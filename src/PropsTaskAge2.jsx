import React from 'react'

function PropsTaskAge2(age1) {
    const age2=age1.age;
    if(age2<18)
    {
        document.write("you are minor ");
        
    }
    else{
        document.write("you are adult ")
    }
  return (
    
    <div>
         
    </div>
  )
}

export default PropsTaskAge2