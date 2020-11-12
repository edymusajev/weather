import React, { useEffect } from 'react';
import { getWeather } from '../apis/weather';

const Weather = () => {
  useEffect(() => {
    getWeather(40, 44);
  }, []);

  return (
    <div>
      <h4>Weather</h4>
    </div>
  );
};

export default Weather;
