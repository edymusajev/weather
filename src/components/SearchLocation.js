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
    try {
      fetchWeatherAndLocation(input);
    } catch (err) {
      console.log('gg');
    }
  };
  return (
    <form onSubmit={onSearchSubmit} className="w-100 searchbar">
      <div className="input-group mb-2 mt-2">
        <input
          className="form-control"
          type="search"
          placeholder="Enter a city"
          value={input}
          onChange={onSearchChange}
          required
        />
        <div className="invalid-tooltip">Please provide a valid city.</div>
        <div className="input-group-append" onClick={onSearchSubmit}>
          <button className="btn orange text-white" type="button">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default connect(null, { fetchWeatherAndLocation })(SearchLocation);
