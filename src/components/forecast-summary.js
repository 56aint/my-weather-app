import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  handleForecastSelect,
}) => {
  return (
  <div className='forcast-summary'>
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

    <button value={date} onClick={handleForecastSelect}>More Details</button>


  </div>
)
};

/*
const ForecastSummary = props => (
<div className='forcast-summary'>
  <div className="date">
    <span>{props.date}</span>
  </div>
  <div className="temperature">
    <span>{props.temperature}&deg;c</span>
  </div>
  <div className="description">
    <span>{props.description}</span>
  </div>
  <div className="icon">
    <span>{props.icon}</span>
  </div>
</div>
) 
*/


ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}),
};


export default ForecastSummary;