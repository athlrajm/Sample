import React from 'react'
import { Carousel } from 'react-bootstrap'

function CarouselMap() {
    const first = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://media.istockphoto.com/id/613134822/photo/the-milky-way-arc-over-the-namib-desert-namibia.jpg?s=612x612&w=0&k=20&c=uA0p8F3i3KgTwFIPnT5fKe7eERd8YSMBE5CwPNynS70=',
'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg']
  return (
    <div>
         
        <Carousel>
        {first.map((display)=>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={display}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{display.title}</h3>
          <p>{display.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )}
      </Carousel>
    </div>
  )
}

export default CarouselMap