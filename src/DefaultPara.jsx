import React from 'react'

function DefaultPara({name='athul', age=25}) {
  return (
    <div>
        <h2>name:{name}</h2>
        <p>age:{age}</p>
    </div>
  )
}

export default DefaultPara