import React, { useEffect } from 'react'

function UseEffectHook() {
    useEffect(() => {
      alert("welcome to my page");
        
      
    }, [])
    
  return (
    <div>
        <h1>Welcome</h1></div>
  )
}

export default UseEffectHook