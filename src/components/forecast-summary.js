import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
<div className='forcast-summary'>
  <div className="date">
    <span>{props.date}</span>
  </div>
  <div className="temperature">
    <span>{props.temperature}</span>
  </div>
  <di className="description">
    <span>{props.description}</span>
  </di>
  <div className="icon">
    <span>{props.icon}</span>
  </div>
</div>
)
ForecastSummary.propTypes = {
  date: PropTypes.number,
  temperature: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.symbol,
};


export default ForecastSummary;