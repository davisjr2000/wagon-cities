import React, { Component } from 'react';

class City extends Component {
  render(){
    return(
      <div>
        <h2>{ this.props.name }</h2>
        <h3>{ this.props.address } - { this.props.slug }</h3>
      </div>
      )
  }
}

export default City;
