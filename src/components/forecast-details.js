import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import '../styles/forecast-details.css';

const ForecastDetails = (props) => {
return(
  <div className="forcast-details">
    <div>
      <span>
        <h5 className="date-more" data-testid="date-id">{moment(props.forecasts.date).format('ddd Do MMM')}</h5>
      </span>
    </div>

    <div>
      <span> <h5 className="tempMax" data-testid="tempMax-id">Max Temperature: {props.forecasts.temperature.max}&deg;c</h5>
      </span>
    </div>
    
    <div>
      <span> <h5 className="tempMin" data-testid="tempMin-id">Min Temperature: {props.forecasts.temperature.min}&deg;c</h5> </span>
    </div>

    
    
    <div>
      <span> <h5 className="humidity" data-testid="humidity-id">Humidity: {props.forecasts.humidity}%</h5></span>
    </div>

    <div>
      <span> <h5 className="wind" data-testid="wind-id">Wind: {props.forecasts.wind.speed}mph</h5></span>
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