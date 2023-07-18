import React, { useState } from 'react'
import Props4 from './Props4';

function Props3() {
    const[first,sefirst]=useState([
        {no:1,name:"john"},
        {no:2,name:"joy"},
        {no:3,name:"jacob"}
    ]);
    const ob={car:"Audi",color:"black"}
  return (
    <div>
     <Props4 first1={first} ob1={ob}/>
    </div>
  )
}

export default Props3