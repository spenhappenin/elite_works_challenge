import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import $ from "jquery";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {} }
  }

  componentDidMount() {

    // axios.get("http://challenge.eliteworks.com/product?api_key=spencerrichards34_5xs@indeedemail.com")
    //   .then(resp => {
    //     let product = resp.data.data.product;
    //     let string = product.data.replace(/'/g, '"');
    //     product.data = JSON.parse(string);
    //     debugger;
    //     this.setState({ product })        
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    $.ajax({
      url: "http://challenge.eliteworks.com/product?api_key=spencerrichards34_5xs@indeedemail.com", 
      type: "GET",
      dataType: "JSON"
    }).done( data => {
      let product = data.data.product;
      let string = product.data.replace(/'/g, '"');
      product.data = JSON.parse(string);
      this.setState({ product })
    }).fail( data => {
      console.log(data);
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Product product={this.state.product} />
        </p>
      </div>
    );
  }
}

export default App;