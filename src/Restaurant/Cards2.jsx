import React from 'react'
import { Card } from 'react-bootstrap'

function Cards2() {
  return (
    
    <div class="row">
      <h1 style={{color:"grey",backgroundColor:"white",textAlign:'center'}}>OUR FOOD GALLERY</h1>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/64/65/06/360_F_364650682_rg32hAO9ApqQAAlrEOMSkrKDr70HHs1y.jpg" />
      
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/traditional-south-indian-meal-food-served-big-banana-leaf-food-platter-complete-thali-selective-focus_466689-50861.jpg" />
      
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://hsaa.hsobjects.com/h/menuitems/images/017/119/764/e151d851f362be24799c22f45ffd50f5-size1200.jpg" />
      
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://foodiewish.com/wp-content/uploads/2020/04/meduvada.jpg" />
      
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/638506124/photo/idli-with-coconut-chutney-and-sambhar.jpg?s=612x612&w=0&k=20&c=ze1ngBM0LY4w9aqWx_tGe2vTAr4uf36elveTDZ83fgw=" />
      
    </Card> 

    </div>
  )
}

export default Cards2