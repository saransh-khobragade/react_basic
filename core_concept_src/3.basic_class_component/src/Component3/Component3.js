import React, { Component } from 'react';

class Comp3 extends Component {
  render() {
    return (
      <p>This is Comp3 with name {this.props.childname}</p>
    );
  }
}

export default Comp3;
