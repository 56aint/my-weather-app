import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import axios from 'axios';
import SearchForm from './search-form';

import '../styles/app.css';


const App = () =>   {
  const [selectedDate, setSelectedDate] = useState(0);

  const [forecasts, setForecasts] = useState([]);

  const [location, setLocation] = useState({
    city: "",
    country: "",
  });

  const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

  const [searchText, setSearchText] = useState('');
  
  const handleForecastSelect = (date) => {
    setSelectedDate(Date);
  }

  useEffect(() => {
    axios
    .get("https://mcr-codes-weather.herokuapp.com/forecast/")
    .then((response) => {
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);   
    }) 
  }, []);

  const doCitySearch = (city) => {
    const request = city.toLowerCase();

    axios.get(`https://mcr-codes-weather.herokuapp.com/forecast?city=${request}`)
    .then((response) => {
      setForecasts(response.data.forcasts);
      setLocation(response.data.location);
    });
  };

  return (

    <div className="forecast">


    <LocationDetails
    city={location.city}
    country={location.country}
    />

    <SearchForm onCitySearch={doCitySearch}/>
  
    <ForecastSummaries 
    forecasts={forecasts}
    onForecastSelect={handleForecastSelect}
    />

    {
      selectedForecast && (<ForecastDetails forecast={selectedForecast} />)
    }

  </div>
  );
}





export default App;
