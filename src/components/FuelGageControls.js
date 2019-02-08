import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class FuelGageControls extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <h3>x{this.props.value}</h3>
        <Button onClick={this.props.increment}>+</Button>
        <Button onClick={this.props.decrement}>-</Button>
      </div >
    )
  };
}

export default FuelGageControls