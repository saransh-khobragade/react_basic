import React, { Component } from 'react';
import Child from './Child/Child';
import './App.css';

class App extends Component {
  state={
    count:0,
    method:["add","minus"]
  }
  add = () =>{
    this.setState((prevState)=>{
      return{
        count:prevState.count+1
      }
    })
  }
  minus = () =>{
    this.setState((prevState)=>{
      return{
        count:prevState.count-1
      }
    })
  }
  reset = () =>{            //always use function dont pass direct object use prevState if using prev state because its a async call
    this.setState(()=>{
      return{
        count:0
      }
    })
  }
  
  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <Child data={this.state.method[0]} func={this.add}/>
        <Child data={this.state.method[1]} func={this.minus}/>
        <Child data={this.state.method[1]} func={this.reset}/>
      </div>
    );
  }
}

export default App;
