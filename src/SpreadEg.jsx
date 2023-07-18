import React, { useState } from 'react'

function SpreadEg() {
    const array=[{name:"polo",colour:"red"},{name:"BMW",colour:"black"}];
    const [first,setfirst]=useState([{name:"audi",colour:"white"},{name:"volvo",colour:"blue"}]);
    const addcar=()=>{
        setfirst([...first,...array])
    }
  return (
    <div>
        <table>
            <tr>
                <th>car</th>
                <th>color</th>
            </tr>
            {first.map((dis)=>
            <tr>
                <td>{dis.name}</td>
                <td>{dis.colour}</td>
            </tr>
            )}
        </table>
        <button onClick={addcar}>addcar</button>
    </div>
  )
}

export default SpreadEg