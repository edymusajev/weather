import React from 'react';
import { connect } from 'react-redux';

const CurrentWeather = ({ weather, location, temperature }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="location-name">{location.name}</h2>
      <h4 className="weather-short-description">{weather.current.weather[0].main}</h4>
      <h1 className="display-1 ml-3">{temperature(weather.current.temp)}</h1>
      <div className="d-flex">
        <p className="mx-1">H:{temperature(weather.daily[0].temp.max)}</p>
        <p className="mx-1">L:{temperature(weather.daily[0].temp.min)}</p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { weather: state.weather, location: state.location };
};

export default connect(mapStateToProps)(CurrentWeather);
