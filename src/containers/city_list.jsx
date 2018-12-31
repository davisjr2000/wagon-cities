import React from 'react';
import City from './city'

const CityList = (props) => {
  const renderList = () => {
    return props.cities.map((city, index) => {
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

  return (
    <div className="city-list">
      {renderList()}
    </div>
    )
}

export default CityList;
