import React, { useState } from 'react'

function UseStateEg4() {
//     const [first, changeColor] = useState("BLACK")

//   return (
//     <div>
        
//         <div>
//         <p style={{first}}>TEXT COLOR IS {first}</p>
//         <button onClick={()=>{changeColor("red")}}style = {{color:'red'}}>RED</button>
//         <button onClick={()=>{changeColor("blue")}}style = {{color:'blue'}}>BLUE</button>
//         <button onClick={()=>{changeColor("green")}} style = {{color:'green'}}>GREEN</button>
//         <button onClick={()=>{changeColor("yellow")}} style = {{color:'yellow'}}>YELLOW</button>
    
//     </div>
//     </div>
    
//   ) 

const [color, setColor] = useState("black");
  const [text, setText] = useState("black");
  const mystyle = {
    fontSize: 16,
    color: color,
    marginTop: 50
  };
  return (
    <div className="App">
      
      <div style={mystyle}>TEXT COLOR IS {color} </div>
      <button onClick={() => setColor("green")}style = {{color:'green'}}>Green</button>
      <button onClick={() => setColor("red")}style = {{color:'red'}}>Red</button>
      <button onClick={() => setColor("blue")} style = {{color:'blue'}}>Blue</button>
      <button onClick={() => setColor("yellow")}style = {{color:'yellow'}}>Yellow</button>
      
    </div>
  );



}

export default UseStateEg4