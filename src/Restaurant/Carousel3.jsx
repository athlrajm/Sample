import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carousel3() {
  return (
    <div><Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://img.freepik.com/premium-vector/fast-delivery-by-scooter-mobile-e-commerce-concept-online-food-pizza-order-packaging-box-infographic_148839-20.jpg?w=2000"
        alt="First slide"
        height="500"
      />
      <Carousel.Caption>
      <button type="button" class="btn btn-outline-secondary">ORDER ONLINE</button>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousel3