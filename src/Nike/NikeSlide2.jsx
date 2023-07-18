import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

function NikeSlide2() {
  return (
    <div>
        <h6 className='Title1'>ESSENTIALS</h6>
        
        <CardGroup >
      <Card style={{border: "6px solid white"}} >
        <Card.Img variant="top"  src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/69ded6b2-4b32-4f76-9dd0-2d5235a04953/nike-just-do-it.png" height={600}/>
        <Card.Body>
        <button type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark">MEN'S</button>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text> */}
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card style={{border: "6px solid white"}} >
        <Card.Img variant="top" src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/1c8b3b45-5c46-418e-8c62-37fc65eca37c/nike-just-do-it.png" height={600} />
        <Card.Body>
        <button type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark">WOMEN;s</button>
          {/* <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text> */}
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card style={{border: "6px solid white"}} >
        <Card.Img variant="top" src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/70a7b831-bc34-4273-9790-6775c56667c0/nike-just-do-it.png" height={600} />
        <Card.Body>
        <button type="button" class="btn btn-outline-secondary" data-mdb-ripple-color="dark">KID's</button>
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

export default NikeSlide2