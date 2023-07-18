import React from 'react'
import { Carousel } from 'react-bootstrap'
import './Caro1.css';

function Caro1() {
  return (
    <div>
        <h5 class="cap1">Hello Nike App</h5>
        <h6 class="cap2">Download the app to access everything Nike. Get Your Great</h6>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/71695054-c971-4e97-b0c3-89c12e9ebd82/nike-just-do-it.jpg"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      </Carousel><br></br>
      <img src="https://imgur.com/JUQRe.jpg" alt="" width={1520}height={300}/><br></br>
      <h6 className='Cap3'>Match day or any day,show up for your team in style with the 2023 Nike National team collections</h6>
      <div class="text-center">
      <button type="button" class="btn btn-dark">Show the looks</button>
</div>
      
    </div>
  )
}

export default Caro1