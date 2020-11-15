import React from 'react';
import { connect } from 'react-redux';
import { kelvinToCelsius, kelvinToFahrenheit } from '../helpers';

const CurrentWeather = ({ weather, location, tempScale }) => {
  const temperature = (temp) => {
    return tempScale === 'celsius' ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);
  };
  return (
    <div className="current-weather-container">
      <h1 className="location-name">{location.name}</h1>
      <h4 className="weather-short-description">{weather.current.weather[0].main}</h4>
      <h4 className="current-temp">{temperature(weather.current.temp)}</h4>
      <div className="max-min-temp-container">
        <p>H:{temperature(weather.daily[0].temp.max)}</p>
        <p>L:{temperature(weather.daily[0].temp.min)}</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { weather: state.weather, location: state.location, tempScale: state.tempScale };
};

export default connect(mapStateToProps)(CurrentWeather);
