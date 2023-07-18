import React from 'react'

function Props4(props) {
    const first2=props.first1;
    const ob2=props.ob1;
    console.log(first2);
  return (
    <div>
        {first2.map((dis)=>
        <h1>{dis.no},{dis.name}</h1>
        )}
        <p>{ob2.car}&{ob2.color}</p>
    </div>
  )
}

export default Props4