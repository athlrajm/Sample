import React from 'react'
import { Card, CardGroup, Col, Row } from 'react-bootstrap'
import './Slide1.css';

function Slide1() {
  return (
    <div>
        <h6 className='Title1'>TRENDING</h6>
        
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/86/2b/68/862b68d304a3da869a4538c6149a9182.jpg" height={600}/>
        <Card.Body>
        <button type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark">GET IT FIRST</button>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text> */}
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6ae2c168473295.5b5ea9fa47da6.jpg" height={600} />
        <Card.Body>
        <button type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark">SHOP NOW</button>
          {/* <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text> */}
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      </CardGroup>
    
    
    </div>
  )
}

export default Slide1