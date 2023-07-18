import React, { useState } from 'react'
import Sample from './Sample'

function Ternary() {
    
    const[hide,sethide]=useState(false)
    const click=()=>{
        sethide((dis)=>! dis)

    }



  return (
    <div>
        {hide?<Sample/>:""}
        <button onClick={click}>{hide?"hide":"show"}</button>
    </div>
  )
}

export default Ternary