import React from 'react'

function Destructuring() {
    const person={name:"john",age:25};

    // const name=person.name;
    // const  age =person.age;
    // console.log(name);
    // console.log(age);


    // const {name , age}=person;
    // console.log(name);
    // console.log(age);   


    const numbers=[1,2,3];
    const [first,second, third]=numbers;
    console.log(first);
    console.log(second);
    console.log(third);
  return (
    <div>
        
    </div>
  )
}

export default Destructuring