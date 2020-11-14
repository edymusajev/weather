import React from 'react';
import { connect } from 'react-redux';
import { kelvinToCelsius } from '../helpers';

const CurrentWeather = ({ weather, location }) => {
  return (
    <div>
      <h1>{location.name}</h1>
      <h4>{weather.current.weather[0].main}</h4>
      <p>{kelvinToCelsius(weather.current.temp)}</p>
      <p>H:{kelvinToCelsius(weather.daily[0].temp.max)}</p>
      <p>L:{kelvinToCelsius(weather.daily[0].temp.min)}</p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { weather: state.weather, location: state.location };
};

export default connect(mapStateToProps)(CurrentWeather);
