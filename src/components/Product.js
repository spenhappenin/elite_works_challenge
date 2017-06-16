import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const Product = ({ product }) => {  
  if(!product.data) {
    return(
      <div>Loading...</div>
    )
  }

  let { name, description, data: { imageUrl, food, animal} } = product
  return(
    <div className='container'>
      <Card>
        <Image src={imageUrl} />
        <Card.Content>
          <Card.Header>
            { name }
          </Card.Header>
          <Card.Description>
            { description }
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            Food: { food }
          </a>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            Animal: { animal }
          </a>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Product;