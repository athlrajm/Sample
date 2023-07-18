import React from 'react'
import './NikeCat1.css';


function NikeCat2() {
    const products = [
        {
          id: 1,
          name: 'Nike Air Max',
          price: 129.99,
          image: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/ed6efa3d-bb62-4d41-89f1-49d01418fe49/nike-just-do-it.jpg',
        },
        {
          id: 2,
          name: 'Nike Free Run',
          price: 89.99,
          image: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/1d2fd0c4-a7dd-4159-84c0-a0364c0990e3/nike-just-do-it.jpg',
        },
        {
          id: 3,
          name: 'Nike Air Force 1',
          price: 109.99,
          image: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/3aef76c8-46c5-4f2a-a18c-3e9bdc148433/nike-just-do-it.jpg',
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
            image: 'https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/5027a28c-3984-4287-94d1-ee6198238ce9/nike-just-do-it.jpg',
          },
        // Add more products as needed
      ];
  return (
    <div className="row">
        
         <div className="product-catalog">
      <h2 className='Title2'>SHOP BY SPORT</h2>
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

export default NikeCat2