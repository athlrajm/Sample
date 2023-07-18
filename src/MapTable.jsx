import React from 'react'

function MapTable() {
    const cars=[{name:"BMW",color:"black"},{name:"Polo",color:"red"}];
  return (
    <div>
        <table>
            <tr>
                <th>CAR</th>
                <th>Color</th>
            </tr>
            {cars.map((dis)=>
            <tr>
                <td>{dis.name}</td>
                <td>{dis.color}</td>
            </tr>
            )}
        </table>
    </div>
  )
}

export default MapTable