import React, { Component } from 'react';

class City extends Component {
  render(){
    return(
      <div>
        <h2>{ this.props.city.name }</h2>
        <h3>{ this.props.city.address } - { this.props.city.slug }</h3>
      </div>
      )
  }
}

export default City;
