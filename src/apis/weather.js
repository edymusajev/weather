import axios from 'axios';

const API_KEY = '1271256593c8dcf1f9d4048d228181a2';

export const weatherAPI = async (lat, lon) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  return response;
};
