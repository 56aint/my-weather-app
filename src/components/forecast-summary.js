import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = ({
  date,
  temperature,
  description,
  icon,
  handleForecastSelect,
}) => {
  return (
  <>
    <div className="date" data-testid="date-id">
      {date}
    </div>
    <div className="temperature" data-testid="temperature-id">
      {temperature}&deg;c
    </div>
    <div className="description" data-testid="description-id">
      {description}
    </div>
    <div className="icon" data-testid="icon-id">
      {icon}
    </div>
    <button value={date} onClick={handleForecastSelect}>
      More Details
    </button>
  </>
  );
};

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
)*/
ForecastSummary.propTypes = {
  forecasts: PropTypes.shape({
  date: PropTypes.string,
  temperature: PropTypes.number,
  description: PropTypes.string,
  icon: PropTypes.string,
})
};


export default ForecastSummary;