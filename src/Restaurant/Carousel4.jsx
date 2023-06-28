import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carousel4() {
  return (
    <div>
        <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/five-gold-star-rate-review-customer-experience-quality-service-excellent-feedback-concept-best-rating-satisfaction-background-with-flat-design-ranking-icon-symbol-3d-rendering_79161-1854.jpg"
          alt="First slide"
          height="500"
        />
        <Carousel.Caption>
          <h3 style={{color:"grey"}}>Michael T</h3>
          <h5 style={{color:"gold"}}>Google reviewer</h5>
          <p style={{color:"black"}}>"I ordinarlly wouldn't eat at a vegetarian place,but this one is amazing.We've eaten there twice so far and each time was wonderful"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/five-gold-star-rate-review-customer-experience-quality-service-excellent-feedback-concept-best-rating-satisfaction-background-with-flat-design-ranking-icon-symbol-3d-rendering_79161-1854.jpg"
          alt="Second slide"
          height="500"
        />

        <Carousel.Caption>
        <h3 style={{color:"grey"}}>Michael T</h3>
          <h5 style={{color:"gold"}}>Google reviewer</h5>
          <p style={{color:"black"}}>"I ordinarlly wouldn't eat at a vegetarian place,but this one is amazing.We've eaten there twice so far and each time was wonderful"</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/five-gold-star-rate-review-customer-experience-quality-service-excellent-feedback-concept-best-rating-satisfaction-background-with-flat-design-ranking-icon-symbol-3d-rendering_79161-1854.jpg"
          alt="Third slide"
          height="500"
        />

        <Carousel.Caption>
        <h3 style={{color:"grey"}}>Michael T</h3>
          <h5 style={{color:"gold"}}>Google reviewer</h5>
          <p style={{color:"black"}}>"I ordinarlly wouldn't eat at a vegetarian place,but this one is amazing.We've eaten there twice so far and each time was wonderful"</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousel4