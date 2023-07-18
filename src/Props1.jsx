import React, { useState } from 'react'
import Props2 from './Props2';

function Props1() {
    const ob={emp:"john",salary:25000};
    const array=[{name:"Joy",age:25},{name:"Jacob",age:30}]
    const [first,setfirst]=useState(array);
  return (
    <div>
        <Props2 first={first} ob={ob} setfirst={setfirst}/>
    </div>
  )
}

export default Props1