import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function CardWithApi() {
    const [first,setfirst]=useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((display)=>{
            setfirst(display.data.products)
        })
    },[])
  return (
    <div className='row'>
        {first.map((display)=>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={display.images[2]} />
      <Card.Body>
        <Card.Title>{display.brand}</Card.Title>
        <Card.Text>
          {display.description}
        </Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    )}
    </div>
  )
}

export default CardWithApi