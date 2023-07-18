import React, { useContext } from 'react'
import { newcontext } from './ContextProvider';

function ContextUpdate() {
    const display=useContext(newcontext)
    const {first,setfirst,name,setname,car,setcar}=display;

  return (
    <div>
         <>
        <h1>{first}</h1>
        <button onClick={()=>setfirst('update')}>click here</button>
        </>
    </div>
  )
}

export default ContextUpdate