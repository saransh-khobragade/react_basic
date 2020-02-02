import React, { Component } from 'react';
import Child from './Child/Child';
import './App.css';

class App extends Component {
  state={
    options:["first","second","third","fourth"]
  }
  add = (newOption) =>{
    this.setState((prevState)=>{
      return{
        options:prevState.options.concat(newOption)
      }
      
    })
  }
  removeOne = (x) =>{
    this.setState((prevState)=>{
      return {
        options:prevState.options.filter(y=>x===y?false:true)
      }
    })
  }
  removeAll = () =>{
    this.setState(()=>({ options:[]}))
  }
  render() {
    return (
      <div>
        <Child data={this.state.options} removeAll={this.removeAll} addOne={this.add} removeOne={this.removeOne}/>
      </div>
    );
  }
}

export default App;
