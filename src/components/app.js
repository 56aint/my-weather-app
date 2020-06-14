import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details'
import ForecastSummaries from './forecast-summaries'

import '../styles/app.css';

const App = (props) =>  (  
  <div className="forecast">
  <h1>
    {`Hello ${props.name}`}
  </h1>
  <LocationDetails 
  city={props.location.city} 
  country={props.location.country} 
  />

  <ForecastSummaries forecasts={props.forecasts}
  />
</div>
);

  
App.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country:PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.array.isRequired,

};


export default App;
