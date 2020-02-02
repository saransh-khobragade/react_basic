import React, { Component } from 'react';

class Comp2 extends Component {
  render() {
    return (
      <p>This is Comp2 with name {this.props.childname}</p>
    );
  }
}

export default Comp2;
