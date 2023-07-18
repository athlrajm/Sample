import { MDBCol, MDBContainer, MDBFooter, MDBRow } from 'mdb-react-ui-kit'
import React from 'react'
import './FooterList.css';

function FooterList() {
  return (
    <div><MDBFooter bgColor='light' className='text-center text-lg-left'>
    <MDBContainer className='p-4'>
      <MDBRow>
        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase'>Icons</h5><br />

          <ul className='list-unstyled mb-0'>
            <li>
              <a href='#!' className='text-dark'>
              Air Force 1
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Huarache
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Air Max 90
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Air Max 95
              </a>
            </li>
          </ul>
        </MDBCol>

        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase mb-0'>Shoes</h5><br />

          <ul className='list-unstyled'>
            <li>
              <a href='#!' className='text-dark'>
              All Shoes
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Custom Shoes
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Jordan Shoes
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Running Shoes
              </a>
            </li>
          </ul>
        </MDBCol>

        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase'>Clothing</h5><br />

          <ul className='list-unstyled mb-0'>
            <li>
              <a href='#!' className='text-dark'>
              All Clothing
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Modest Wear
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Hoodies & Pullovers
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Shirts & Tops
              </a>
            </li>
          </ul>
        </MDBCol>

        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
          <h5 className='text-uppercase mb-0'>Kids'</h5><br/>

          <ul className='list-unstyled'>
            <li>
              <a href='#!' className='text-dark'>
              Kids' Shoes
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Kids' Clothing
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Kids' Jordan Shoes
              </a>
            </li>
            <li>
              <a href='#!' className='text-dark'>
              Kids' Running Shoes
              </a>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    {/* <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      &copy; {new Date().getFullYear()} Copyright:{' '}
      <a className='text-dark' href='https://mdbootstrap.com/'>
        MDBootstrap.com
      </a>
    </div> */}
  </MDBFooter></div>
  )
}

export default FooterList