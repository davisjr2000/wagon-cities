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

  renderList(){
    return this.props.cities.map((city, index) => {
      return(
        <City
        city={city}
        index={index}
        />
      )
    })
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
      )
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
