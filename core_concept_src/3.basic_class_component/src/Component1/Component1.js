import React, { Component } from 'react';

class Comp1 extends Component {
  render() {
    return (
      <p>This is Comp1 with name {this.props.childname}</p>
    );
  }
}

export default Comp1;
