import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carousel2() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ozfoodhunter.com.au/resources/upload_files/home_popular/blog68.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>WELCOME TO UDUPI CAFE</h3>
          <p>Enter the world of healthy flavours</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/south-indian-filter-coffee-served-traditional-brass-stainless-steel-cup_466689-90126.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>WELCOME TO UDUPI CAFE</h3>
          <p>Authentic vegeterian Cuisine</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/6/21/udupi-food.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>UDUPI CAFE</h3>
          <p>
            TAKE A CULINARY TRIP DOWN THE LANES OF SOUTH INDIAN CUISINE
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousel2