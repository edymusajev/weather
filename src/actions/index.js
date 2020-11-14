// import { weatherAPI } from '../apis/weather';
import axios from 'axios';

const API_KEY = '1271256593c8dcf1f9d4048d228181a2';

export const fetchWeather = (lat, lon) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    dispatch({
      type: 'FETCH_WEATHER',
      payload: response.data,
    });
  };
};

export const fetchLocation = (lat, lon) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );
    dispatch({
      type: 'FETCH_LOCATION',
      payload: response.data,
    });
  };
};
