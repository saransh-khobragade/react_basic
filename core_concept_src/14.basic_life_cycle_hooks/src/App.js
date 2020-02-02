import React, { Component } from 'react';
import Child from './Child/Child';
import './App.css';

class App extends Component {
  state={
    name:"saransh"
  }
  changeChild = () =>{
    this.setState(()=>({name:"name changed"}))
  }
  
  render() {
    return (
      <div>
        <Child data={this.state.name}/>
        <button onClick={this.changeChild}>Change child</button>
      </div>
    );
  }
}

export default App;
