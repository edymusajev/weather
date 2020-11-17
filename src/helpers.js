export const kelvinToCelsius = (kelvin) => {
  return `${Math.round(kelvin - 273.15)}°`;
};
export const kelvinToFahrenheit = (kelvin) => {
  return `${Math.round((kelvin - 273.15) * (9 / 5) + 32)}°`;
};

export const rainPercentage = (day) => {
  return day;
  // let sum = 0
  // return day.map((hour, index) => {
  //   if (index < 24) {

  //   }
  // })
};
export const windDegreeToText = (degree) => {
  switch (true) {
    case degree < 22.5:
      return 'n';
    case degree < 45:
      return 'nne';
    case degree < 67.5:
      return 'ne';
    case degree < 90:
      return 'ene';
    case degree < 112.5:
      return 'e';
    case degree < 135:
      return 'ese';
    case degree < 157.5:
      return 'se';
    case degree < 180:
      return 'sse';
    case degree < 202.5:
      return 's';
    case degree < 225:
      return 'ssw';
    case degree < 247.5:
      return 'sw';
    case degree < 270:
      return 'wsw';
    case degree < 292.5:
      return 'w';
    case degree < 315:
      return 'wnw';
    case degree < 337.5:
      return 'nnw';
    default:
      return 'nw';
  }
};
