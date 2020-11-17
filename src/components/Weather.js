import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherAndLocation } from '../actions';

import Header from './Header';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import WeatherDescription from './WeatherDescription';

import { kelvinToCelsius, kelvinToFahrenheit } from '../helpers';

// TODO:
// 1. handle fetch location error UI response

const Weather = ({ weather, location, fetchWeatherAndLocation, tempScale }) => {
  useEffect(() => {
    fetchWeatherAndLocation('London');
  }, [fetchWeatherAndLocation]);

  const temperature = (temp) => {
    return tempScale === 'celsius' ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);
  };

  const renderWeather = () => {
    if (Object.keys(weather).length !== 0 && Object.keys(location).length !== 0) {
      return (
        <div className="mb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-4 order-md-1 container">
              <CurrentWeather temperature={temperature} />
            </div>
            <div className="col-md-8 order-md-2 container">
              <HourlyWeather temperature={temperature} />
            </div>

            <div className="col-md-12 order-md-5 mt-5">
              <DailyWeather temperature={temperature} />
            </div>
            <div className="col-md-12 order-md-4 bg-dark pt-5 pb-5">
              <WeatherDescription temperature={temperature} />
            </div>
            <div className="col-12 my-5 text-center order-md-2">
              Today: {weather.current.weather[0].description}. The high will be{' '}
              {temperature(weather.daily[0].temp.max)}. The low tonight will be{' '}
              {temperature(weather.daily[0].temp.night)}.
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <Header />
      <div className="">{renderWeather()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { weather: state.weather, location: state.location, tempScale: state.tempScale };
};

export default connect(mapStateToProps, { fetchWeatherAndLocation })(Weather);
