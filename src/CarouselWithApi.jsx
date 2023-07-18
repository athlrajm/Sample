import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Carousel, Stack } from 'react-bootstrap'

function CarouselWithApi() {
    const [first,setfirst]=useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/products').then((display)=>{
            setfirst(display.data.products)
    })
    }, [])
    
  return (
    <div className='row'>
        {first.map((display)=>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={display.images[1]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{display.title}</h3>
          <p>{display.description}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={display.images[2]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{display.title}</h3>
          <p>{display.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={display.images[3]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{display.title}</h3>
          <p>{display.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      </Carousel>
        )}
    </div>
  )
}


export default CarouselWithApi