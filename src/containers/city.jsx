import React, { Component } from 'react';

class City extends Component {
  render(){
    return(
      <li className="list-group-item">
        <h2>{ this.props.city.name }</h2>
      </li>
      )
  }
}

export default City;
