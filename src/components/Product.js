import React from 'react';

const Product = ({ product }) => {  
  if(!product.data) {
    return(
      <div>Loading...</div>
    )
  }

  let { name, description, data: { imageUrl, food, animal} } = product
  return(
    <div className='container'>
      <div className="card-container">
        <div>
          <img src={imageUrl} width='350' alt='Product' />
        </div>

        <div className='product-title'>
          <div className='card-content'>
            <h2>{ name }</h2>
          </div>
          <div className='card content'>
            <p>{ description }</p>
          </div>
          <hr />
        </div>

        <div className='product-favorites'>
          <div className='card-content'>
            <h5>Favorite Food: </h5> 
            <p>{ food }</p>
          </div>
          <div className='card-content'>
            <h5>Favorite Animal: </h5>
            <p>{ animal }</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;