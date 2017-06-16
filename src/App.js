import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { product: {}, edit: false }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
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

  toggleEdit() {
    this.setState({ edit: !this.state.edit });
  }

  handleEdit() {
    let name = this.refs.editName.value;
    let description = this.refs.editDescription.value;
    let imageUrl = this.refs.editImageUrl.value;
    let food = this.refs.editFood.value;
    let animal = this.refs.editAnimal.value;
    let data = `{'imageUrl': '${imageUrl}', 'food': '${food}', 'animal': '${animal}'}`;
    
    $.ajax({
      url: "http://challenge.eliteworks.com/product/set?api_key=spencerrichards34_5xs@indeedemail.com",
      type: "POST",
      dataType: "JSON",
      data: { name, description, data: data }
    }).done( data => {
      // debugger;
      console.log("Success!");
      this.setState({ product: {name: name, description: description, data: {imageUrl: imageUrl, food: food, animal: animal} }})
      this.toggleEdit();
    }).fail( err => {
      console.log(err);
    });
  }

  display() {
    return(
      <div className="App">
        <div className="App-intro">
          <Product product={this.state.product} />
          <button onClick={ this.toggleEdit }>Edit</button>
        </div>
      </div>
    );
  }

  edit() {
    return(
      <div className="App">
        <p className="App-intro">
          <input type='text' ref='editName' defaultValue={ this.state.product.name } placeholder='Name' />
          <br />
          <input type='text' ref='editDescription' defaultValue={ this.state.product.description } placeholder='Description' />
          <br />
          <input type='text' ref='editImageUrl' defaultValue={ this.state.product.data.imageUrl } placeholder='Image URL' />
          <br />
          <input type='text' ref='editFood' defaultValue={ this.state.product.data.food } placeholder='Food' />
          <br />          
          <input type='text' ref='editAnimal' defaultValue={ this.state.product.data.animal } placeholder='Animal' />
          <br />          
          <button onClick={ this.toggleEdit }>Cancel</button>
          <br />
          <button onClick={ this.handleEdit }>Edit</button>
        </p>
      </div>
    );
  }

  render() {
    if(this.state.edit) {
      return( this.edit() );
    } else {
      return( this.display() );
    }
  }
}

export default App;