import React from 'react';

const WeatherDescriptionItem = ({ description, value }) => {
  return (
    <li className="list-group-item  pl-md-2 col text-md-center weather-description bg-dark text-white">
      <small className="text-muted">{description}</small>
      <h5 className="mb-0 font-weight-normal">{value}</h5>
    </li>
  );
};

export default WeatherDescriptionItem;
