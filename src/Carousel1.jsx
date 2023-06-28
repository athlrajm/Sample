import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carousel1() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
         </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Carousel1