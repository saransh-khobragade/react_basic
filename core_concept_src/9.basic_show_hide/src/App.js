import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    visible:true
  }
  toggleVisible = () => {
    this.setState((prevState)=>{
      return {
        visible:!prevState.visible
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.toggleVisible}>{this.state.visible?'Hide':'Show'}</button>
        {this.state.visible && <div>Sensitive information</div>}
      </div>
    );
  }
}

export default App;
