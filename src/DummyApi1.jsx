import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DummyApi1() {
    const [first,setfirst]=useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((display)=>{
            setfirst(display.data.products)
        })
    },[])
  return (
    <div>
      {first.map((display)=>
     <h2>{display.brand}</h2> 
    )}
    </div>
  )
}

export default DummyApi1