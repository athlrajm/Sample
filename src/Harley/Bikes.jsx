import React from 'react'


function Bikes() {
    const MotorcycleListing = ({ imageUrl, model, description }) => {
        return (
          <div className="motorcycle-listing">
            <img src={imageUrl} alt={model} className="motorcycle-image" />
            <div className="motorcycle-content">
              <h3 className="motorcycle-model">{model}</h3>
              <p className="motorcycle-description">{description}</p>
              <a href="/" className="motorcycle-link">Learn More</a>
            </div>
          </div>
        )}

    const motorcycleListings = [
        {
          imageUrl: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2023/2023-sportster-s/2023-sportster-s-f89/2023-sportster-s-f89-motorcycle.jpg?impolicy=myresize&rw=500',
          model: 'Sportster',
          description: 'The Sportster combines power with agility for an exhilarating ride.',
        },
        {
          imageUrl: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2023/2023-nightster/2023-nightster-f53/2023-nightster-f53-motorcycle.jpg?impolicy=myresize&rw=500',
          model: 'Softail',
          description: 'The Softail delivers a smooth and comfortable cruising experience.',
        },
        {
            imageUrl: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2023/2023-sportster-s/2023-sportster-s-f89/2023-sportster-s-f89-motorcycle.jpg?impolicy=myresize&rw=500',
            model: 'Sportster',
            description: 'The Sportster combines power with agility for an exhilarating ride.',
          },
        {
            imageUrl: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2023/2023-nightster/2023-nightster-f53/2023-nightster-f53-motorcycle.jpg?impolicy=myresize&rw=500',
            model: 'Softail',
            description: 'The Softail delivers a smooth and comfortable cruising experience.',
          },
    ]
  return (
    <div className="app">
      <h1>Motorcycles</h1>
      <div className="motorcycle-listings">
        {motorcycleListings.map((motorcycle, index) => (
          <MotorcycleListing
            key={index}
            imageUrl={motorcycle.imageUrl}
            model={motorcycle.model}
            description={motorcycle.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Bikes