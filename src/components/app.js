import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';

import SearchForm from './search-form';

import '../styles/app.css';


const App = () =>   {
  const [selectedDate, setSelectedDate] = useState(0);
  
  const [forecasts, setForecasts] = useState([]);

  const [location, setLocation] = useState({
    city: "",
    country: "",
  });

  const [load, setLoad] = useState(false);

  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  }

  

  useEffect(() => {
    axios
    .get("https://mcr-codes-weather.herokuapp.com/forecast/")
    .then((response) => {
      setForecasts(response.data.forecasts);
      setLocation(response.data.location); 
      setLoad(true);  
    }) 
  }, []);

  const doCitySearch = (city) => {
    const cityrequest = city.toLowerCase();

    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${cityrequest}`)
    .then((response) => {
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
    })
    .catch((err) => {
      alert('Your searched City is not available');
      setLoad(false);
    }, []);
  };
  // 
  if (load) {
    return (
      <div className="forecast">
  
  
      <LocationDetails
      city={location.city}
      country={location.country}
      />
  
      <SearchForm onCitySearch={doCitySearch}
      />
    
      <ForecastSummaries 
      forecasts={forecasts}
      onForecastSelect={handleForecastSelect}
      />
  
      {
        selectedForecast && (<ForecastDetails forecasts={selectedForecast} />)
      }
  
    </div>
    );
  } else {
    return <div className="loading">please refresh the browser...</div>   
  }
};

  

  





export default App;
