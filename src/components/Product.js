import React from 'react';

const Product = ({ product }) => {
  console.log(product.data);

  if(!product.data) {
    return(
      <div>Loading</div>
    )
  }
  let { name, description, data: { imageUrl, food, animal} } = product

  return(
    <div>
      <div>
        <h1>{ name }</h1>
        <h1>{ description }</h1>
        <img src={imageUrl} width='300' />
        <h1>{ food }</h1>
        <h1>{ animal }</h1>
      </div>
    </div>
  );
}

export default Product;