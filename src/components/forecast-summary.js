import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';

const ForecastSummary = (props) => (
  <div className='forcast-summary'>
    <div>
      <span  className="date" data-testid="date-id">{props.date}</span>
    </div>

    <div>
      <span className="temperature" data-testid="temperature-id">{props.temperature}&deg;c</span>
    </div>

    <div> 
      <span className="description" data-testid="description-id"> {props.description}</span>
    </div>

    <div className="icon" data-testid="icon-id">
      <WeatherIcon name="owm" iconId="800" />
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
  date: PropTypes.string,
  temperature: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.string,
};


export default ForecastSummary;