import React from 'react';
var axios = require('axios')

class Product extends React.Component {
  state = {}

  componentDidMount() {
    axios.get('http://challenge.eliteworks.com/product?api_key=spencerrichards34_5xs@indeedemail.com')
      .then(resp => {
        this.setState(resp)
      })
      debugger;
  }

  render() {
    return(
      <div>
        Product is working!
      </div>
    );
  }
}

export default Product;