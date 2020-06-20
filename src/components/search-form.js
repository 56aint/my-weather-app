import React, { useState } from 'react';

import '../styles/search-form.css';


const SearchForm = (props) => {
  
  const [searchText, setSearchText] = useState('');
  
  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    // console.log('event.target.value')
  };

  return (
    <div className="search-form">
      <input className="search-input" type="text" placeholder="search for a city" value={searchText} onChange={handleInputChange}></input>
      <button className="search-button" type="submit" onClick={() => props.onCitySearch(searchText)}>Search</button>
    </div>
  );
};


export default SearchForm;