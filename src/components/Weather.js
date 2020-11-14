import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather, fetchLocation } from '../actions';

import SearchLocation from './SearchLocation';
import CurrentWeather from './CurrentWeather';

const Weather = ({ fetchLocation, fetchWeather, weather, location }) => {
  useEffect(() => {
    fetchWeather(35, 139);
    fetchLocation(35, 139);
  }, [fetchLocation, fetchWeather]);

  const renderWeather = () => {
    if (Object.keys(weather).length !== 0 && Object.keys(location).length !== 0) {
      return <CurrentWeather />;
    } else {
      return <div>loading</div>;
    }
  };
  return (
    <div>
      <SearchLocation />
      {renderWeather()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: state.weather, location: state.location };
};

export default connect(mapStateToProps, { fetchWeather, fetchLocation })(Weather);
