import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherAndLocation } from '../actions';

const SearchLocation = ({ fetchWeatherAndLocation }) => {
  const [input, setInput] = useState('');
  const onSearchChange = (e) => {
    setInput(e.target.value);
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    fetchWeatherAndLocation(input);
  };
  return (
    <form onSubmit={onSearchSubmit} className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="Enter a city"
        value={input}
        onChange={onSearchChange}
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default connect(null, { fetchWeatherAndLocation })(SearchLocation);
