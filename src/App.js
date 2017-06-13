import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Elite Works Challenge</h2>
        </div>
        <p className="App-intro">
          <Product />
        </p>
      </div>
    );
  }
}

export default App;
