import React, {Component} from 'react';
import City from './city'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

function mapStateToProps(state) {
   return {
    cities: state.cities
   };
}

function mapDispatchToProps(dispatch){
 return bindActionCreators(
  { setCities: setCities },
  dispatch
  );
}

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
 }

  render(){
    return this.props.cities.map((city, index) => {
      return(
        <City
        name={city.name}
        address={city.address}
        slug={city.slug}
        index={index}
        />
      )
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
