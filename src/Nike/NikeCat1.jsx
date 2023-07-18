import React from 'react'
import './NikeCat1.css';

function NikeCat1() {
    
    const products = [
        {
          id: 1,
          name: 'Nike Air Max',
          price: 129.99,
          image: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/5ffa20aa-859b-48b7-9f89-20c2d2b7c9b5/nike-just-do-it.jpg',
        },
        {
          id: 2,
          name: 'Nike Free Run',
          price: 89.99,
          image: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/21da6e7a-b8a9-48e0-b63e-2e68a64a889f/nike-just-do-it.jpg',
        },
        {
          id: 3,
          name: 'Nike Air Force 1',
          price: 109.99,
          image: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/813418c0-3953-4039-8b2b-36890882c710/nike-just-do-it.jpg',
        },
        {
            id: 4,
            name: 'Nike Air Force 1',
            price: 109.99,
            image: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/34c4b273-4998-4071-9fd0-8351ab304ef2/nike-just-do-it.jpg',
          },
          {
            id: 5,
            name: 'Nike Air Force 1',
            price: 109.99,
            image: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/9ded1c12-008d-4626-b02d-cd42ed532cb9/nike-just-do-it.jpg',
          },
        // Add more products as needed
      ];
  return (
    <div className="row">
        
         <div className="product-catalog">
      <h2 className='Title2'>Always Iconic</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name}/>
            {/* <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p> */}
          </div>
        ))}
      </div>
    </div>
    
    </div>
  )
}

export default NikeCat1