import React, { Component } from 'react';
import Child from "./Child/Child"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Child name="saransh"></Child>
      </div>
    );
  }
}

export default App;