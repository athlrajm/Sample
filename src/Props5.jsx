import React, { useState } from 'react'
import Props6 from './Props6'

function Props5() {
    const array=[{name:"John",age:25},{name:"Jacob",age:30},{name:"Joy",age:20}]
    
    const [first,setfirst]=useState(array);
  return (
    <div>
        <Props6 first={first} setfirst={setfirst}/>
    </div>
  )
}

export default Props5