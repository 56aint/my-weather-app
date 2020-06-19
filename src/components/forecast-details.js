import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = (props) => {
return(
  <div className="forcast-details">

    <div className="date" data-testid="date-id">
      <span>{moment(props.forecast.date).format('ddd Do MMM')}</span>
    </div>

    <div className="tempMin" data-testid="tempMin-id">
      <span>Min Temperature: {props.forecast.temperature.min}&deg;c</span>
    </div>

    <div className="tempMax" data-testid="tempMax-id">
      <span>Max Temperature: {props.forecast.temperature.min}&deg;c</span>
    </div>
    
    <div className="humidity" data-testid="humidity-id">
      <span>Humidity: {props.forecast.humidity}%</span>
    </div>

    <div className="wind" data-testid="wind-id">
      <span>Wind: {props.forecast.wind.speed}mph</span>
    </div>

  </div>
)
};

ForecastDetails.prototype ={
  forecast: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    temperature: PropTypes.string.isRequired,
    humidity: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,

  }),
};

export default ForecastDetails;