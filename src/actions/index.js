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

export const fetchLocation = (city) => {
  return async (dispatch, getState) => {
    await axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((response) => {
        dispatch({
          type: 'FETCH_LOCATION',
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_LOCATION_ERROR',
        });
      });
  };
};

export const fetchWeatherAndLocation = (city) => {
  return async (dispatch, getState) => {
    await dispatch(fetchLocation(city));
    const coords = getState().location.coord;
    await dispatch(fetchWeather(coords.lat, coords.lon));
  };
};

export const toggleTempScale = () => {
  return { type: 'TOGGLE_TEMP_SCALE' };
};
