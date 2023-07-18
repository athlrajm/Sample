import React from 'react'
import { Carousel } from 'react-bootstrap'

function MapCar1() {
    const det=[
        {
            caption:"First",
            content:"First carousel",
            image:"https://upload.wikimedia.org/wikipedia/commons/1/16/HDRI_Sample_Scene_Balls_%28JPEG-HDR%29.jpg"

        },
        {
            caption:"second",
            content:"second carousel",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtfak4-TNmXs0gCXlFn2izJqz3vXyyKGbBmxUYf2lS18w47vj2UkCiGF4SqcoHEaTNQ8&usqp=CAU"
        },
        {
            caption:"third",
            content:"third carousel",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRtfak4-TNmXs0gCXlFn2izJqz3vXyyKGbBmxUYf2lS18w47vj2UkCiGF4SqcoHEaTNQ8&usqp=CAU"
}]
  return (
    
    <div>
        
        <Carousel>
            {det.map((dis)=>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dis.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{dis.caption}</h3>
          <p>{dis.content}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )}
      </Carousel>
    </div>
        
        )
    }

export default MapCar1