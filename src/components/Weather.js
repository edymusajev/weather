import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherAndLocation } from '../actions';

import Header from './Header';
import SearchLocation from './SearchLocation';
import CurrentWeather from './CurrentWeather';

// TODO:
// 1. handle fetch location error UI response

const Weather = ({ weather, location, fetchWeatherAndLocation }) => {
  useEffect(() => {
    fetchWeatherAndLocation('Amsterdam');
  }, [fetchWeatherAndLocation]);

  const renderWeather = () => {
    if (Object.keys(weather).length !== 0 && Object.keys(location).length !== 0) {
      return <CurrentWeather />;
    } else {
      return <div>loading...</div>;
    }
  };
  return (
    <div>
      <Header />
      {renderWeather()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: state.weather, location: state.location };
};

export default connect(mapStateToProps, { fetchWeatherAndLocation })(Weather);
