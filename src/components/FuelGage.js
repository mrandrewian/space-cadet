import React, { Component } from 'react';

class FuelGage extends Component {
  render() {
    return (
      <div>
        <h1>Fuel Gage</h1>
        <h3 className="my-5">{this.props.value.crement}</h3>
      </div>
    )
  };
}

export default FuelGage