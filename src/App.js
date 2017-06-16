import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';
import $ from "jquery";
import { Button, Form, Container } from 'semantic-ui-react';

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
          <br />
          <div>
            <Button inverted color='blue' onClick={ this.toggleEdit }>Edit Product</Button>
          </div>
        </div>
      </div>
    );
  }

  edit() {
    return(
      <div>
        <div>
          <Container>
            <Form onSubmit={ this.handleEdit }>
              <Form.Field>
                <label>Name</label>
                <input type='text' ref='editName' defaultValue={ this.state.product.name } placeholder='Name' />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <input type='text' ref='editDescription' defaultValue={ this.state.product.description } placeholder='Description' />
              </Form.Field>
              <Form.Field>
                <label>Image URL</label>
                <input type='text' ref='editImageUrl' defaultValue={ this.state.product.data.imageUrl } placeholder='Image URL' />
              </Form.Field>
              <Form.Field>
                <label>Food</label>
                <input type='text' ref='editFood' defaultValue={ this.state.product.data.food } placeholder='Food' />
              </Form.Field>
              <Form.Field>
                <label>Animal</label>
                <input type='text' ref='editAnimal' defaultValue={ this.state.product.data.animal } placeholder='Animal' />
              </Form.Field>            
              <Button type='submit' inverted color='green' onClick={ this.handleEdit }>Submit</Button>
              <Button onClick={ this.toggleEdit } inverted color='red'>Cancel</Button>
            </Form> 
          </Container> 
        </div>
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