import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';

import '../styles/app.css';


const App = (props) =>   {
  const [selectedDate, setSelectedDate] = useState(props.forecasts[0].date);

  const [forecasts setForecasts] = useState([]);

  const [location setLocation] = useState({
    city: "",
    country: "",
  });

  const selectedForecast = props.forecasts.find(forecast => forecast.date === selectedDate);
  
  const handleForecastSelect = (date) => {
    setSelectedDate(Date);
  }

  return (

    <div className="forecast">
    <h1>
      {`Hello ${props.name}`}
    </h1>
    <LocationDetails
    city={props.location.city}
    country={props.location.country}
    onForecastSelect={handleForecastSelect}
    />
  
    <ForecastSummaries forecasts={props.forecasts}/>
    <ForecastDetails forecast={props.forecasts[0]} />

  </div>
  );
}


  
App.propTypes = {
  name: PropTypes.string.isRequired,

  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,

  forecasts: PropTypes.array.isRequired,

  forecast: PropTypes.string,

};


export default App;
