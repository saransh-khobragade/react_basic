import React, { Component } from 'react';
import Comp1 from './Component1/Component1';
import Comp2 from './Component2/Component2';
import Comp3 from './Component3/Component3';

class App extends Component {
  render() {
    const name1="saransh1"
    const name2="saransh2"
    const name3="saransh3"


    return (
      <div>
        <h1>This is App</h1>
        <Comp1 childname={name1} />
        <Comp2 childname={name2} />
        <Comp3 childname={name3} />
      </div>

    );
  }
}

export default App;
