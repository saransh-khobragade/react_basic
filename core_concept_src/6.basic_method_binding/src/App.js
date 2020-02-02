import React, { Component } from 'react';
import './App.css';
import Comp1 from './Comp1/Comp1'

class App extends Component {
  render() {
  const ele="hello"

    return (
      <Comp1 data={ele}/>
    );
  }
}

export default App;
