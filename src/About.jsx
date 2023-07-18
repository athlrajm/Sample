import React, { useContext } from 'react'
import { newcontext } from './ContextProvider';

function About() {
    const display=useContext(newcontext)
    const {first,setfirst,name,setname,car,setcar}=display;
    // const handleClick=()=>{
    //     const updatedArray=car.map(obj=>{
    //         if(obj.name==='bmw'){
    //             return{...obj,color:'yellow'};
    //         }
    //         return obj;
    //     });
    //     setcar(updatedArray)
    // }
  return (
    <div>
        <>
        <h1>{first}</h1></>
    </div>
  )
}

export default About