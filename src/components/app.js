import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details'

const App = (props) =>  <div>
  <h1>{`Hello ${props.name}`}</h1>
  <LocationDetails city={props.location.city} country={props.location.country} />
  </div>
  
App.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country:PropTypes.string,
  }).isRequired
};

/*App.defaultProps ={
  name: 'World',
};*/


export default App;
