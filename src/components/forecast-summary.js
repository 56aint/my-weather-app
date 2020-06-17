import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  onSelect,
  handleForecastSelect,
}) => {
  return (
  <div className='forecast-summary'>
    <div className="date" data-testid="date-id">
      <span>{moment({date}).format('ddd Do MMM')}</span>
    </div>
    

    <div>
      <span className="temperature" data-testid="temperature-id">{temperature}&deg;c</span>
    </div>

    <div> 
      <span className="description" data-testid="description-id"> {description}</span>
    </div>

    <div className="icon" data-testid="icon-id">
      <WeatherIcon name="owm" iconId={icon} />
    </div>
    {console.log(icon)}
    {console.log(typeof icon)}

    <button  onClick={() => onSelect(date)}>More details</button>

  </div>
)
};


ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onSelect: PropTypes.func,
}),
};


export default ForecastSummary;