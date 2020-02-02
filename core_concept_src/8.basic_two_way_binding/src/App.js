import React, { Component } from 'react';
import Child from "./Child/Child"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data:{
      "name":"Saransh"
    }
  }
  twoWay = (event) =>{
    this.setState({
      data:{
        "name":event.target.value
      }
    })
  }
  
  render() {
    return (
      <div className="App">
        <Child name={this.state.data.name} changed={this.twoWay}></Child>
      </div>
    );
  }
}

export default App;
