import React, { Component } from 'react';
import Comp1 from './Comp/Comp1';
import './App.css';

class App extends Component {
  
  handleClick = () => {
    alert("clicked")
  }

  render() {
    return (
      <div>
        <Comp1 data={this.handleClick}/>
      </div>
    );
  }
  
}

export default App;
