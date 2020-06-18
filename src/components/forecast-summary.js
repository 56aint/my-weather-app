import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = (props) => {
  return (
  <div className='forecast-summary'>
    <div className="date" data-testid="date-id">
      <span>{moment(props.date).format('ddd Do MMM')}</span>
    </div>
    

    <div>
      <span className="temperature" data-testid="temperature-id">{props.temperature}&deg;c</span>
    </div>

    <div> 
      <span className="description" data-testid="description-id"> {props.description}</span>
    </div>

    <div className="icon" data-testid="icon-id">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>
    {console.log(props.icon)}
    {console.log(typeof icon)}

    <button  onClick={() => props.onSelect(props.date)}>More details</button>

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