import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = (props) => (
  <div className='forcast-summary'>
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
    {console.log(typeof props.icon)}
  </div>
);

/*const ForecastSummary = props => (
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
<div className="icon" data-testid="icon-id">
  <WeatherIcon name="owm" iconId={props.icon} />
</div>

<div> 
      <span className="icon" data-testid="icon-id">{props.icon}</span>
    </div>
  
*/


ForecastSummary.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.instanceOf(Date),
    temperature: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}),
};


export default ForecastSummary;