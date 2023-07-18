import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel, CarouselItem } from 'react-bootstrap';

function CardWithApi2() {
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
      <Carousel>
        {display.images.map((image,index)=>(
            <Carousel.Item key={index}>
                <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
            </Carousel.Item>
        ))

        }
      </Carousel>
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

export default CardWithApi2