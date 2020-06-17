import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastDetails = ({
  date,
  temperatureMin,
  temperatureMax,
  humidity,
  wind,
}) => {
  return (
  <div className="forcast-details">
    <div className="date" data-testid="date-id">
      <span>{moment({date}).format('ddd Do MMM')}</span>
    </div>

    <div>
      <span className="tempMin" data-testid="tempMin-id">{temperatureMin}&deg;c</span>
    </div>

    <div>
      <span className="tempMax" data-testid="tempMax-id">{temperatureMax}&deg;c</span>
    </div>

    <div>
      <span className="humidity" data-testid="humidity-id"> {humidity}</span>
    </div>

    <div>
      <span className="wind" data-testid="wind-id"> {wind}</span>
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