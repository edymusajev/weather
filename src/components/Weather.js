import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

const Weather = ({ fetchWeather, weather }) => {
  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);
  // useEffect(() => {
  //   console.log(weather);
  // });
  return (
    <div>
      <h4>Weather</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: state.weather };
};

export default connect(mapStateToProps, { fetchWeather })(Weather);
