import { weatherAPI } from '../apis/weather';

export const fetchWeather = (lat, lon) => {
  return async (dispatch) => {
    const response = await weatherAPI(lat, lon);
    dispatch({
      type: 'FETCH_WEATHER',
      payload: response,
    });
  };
};

// export const fetchPosts = () => {
//     return async (dispatch) => {
//       const response = await jsonPlaceholder.get('/posts');
//       dispatch({
//         type: 'FETCH_POSTS',
//         payload: response,
//       });
//     };
//   };
