import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

const Weather = ({ fetchWeather }) => {
  useEffect(() => {
    fetchWeather(24, 33);
  }, [fetchWeather]);

  return (
    <div>
      <h4>Weather</h4>
    </div>
  );
};

export default connect(null, fetchWeather)(Weather);
