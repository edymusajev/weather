export const kelvinToCelsius = (kelvin) => {
  return `${Math.round(kelvin - 273.15)}°`;
};
export const kelvinToFahrenheit = (kelvin) => {
  return `${Math.round((kelvin - 273.15) * (9 / 5) + 32)}°`;
};
