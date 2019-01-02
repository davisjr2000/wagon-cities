import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city'


class CityList extends Component {
  renderList(){
    return this.props.cities.map((city) => {
      return(
        <City city={city} key={city.name}/>
      );
    });
  };

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
      );
    }
   };

function mapStateToProps(state) {
   return {
    cities: state.cities
   };
}

export default connect(mapStateToProps)(CityList);
