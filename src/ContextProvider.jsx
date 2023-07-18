import React, { createContext, useState } from 'react'
const newcontext=createContext()

function ContextProvider({children}) {

    const [first,setfirst]=useState("welcome");

    const [name,setname]=useState({Name:"john",Age:15});
    const [car,setcar]=useState([{Name:"bmw",color:"white"},{name:"joy",color:"red"}]);
  return (
    <div>
         <newcontext.Provider value={{first,setfirst,name,setname,car,setcar}}>
            {children}
         </newcontext.Provider>

    </div>
  )
}

export default ContextProvider
export{newcontext}