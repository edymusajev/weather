import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

const HourlyWeather = ({ hourly, temperature }) => {
  const renderHourly = () => {
    return hourly.map((hour, index) => {
      if (index < 27) {
        const time = index === 0 ? 'Now' : moment.unix(hour.dt).format('HH');
        return (
          <div className="d-flex flex-column col-2 align-items-center px-4 " key={hour.dt}>
            <p
              className="h-25"
              style={time === 'Now' ? { fontWeight: 'bolder' } : { fontWeight: 'normal' }}
            >
              {time}
            </p>
            <p className="text-primary">{hour.pop > 0 ? Math.round(hour.pop * 100) + '%' : ''}</p>
            <figure>
              <img
                className="img-fluid weather-img"
                src={` https://openweathermap.org/img/wn/${hour.weather[0].icon}@4x.png`}
                alt={hour.weather[0].description}
              />
            </figure>

            <p className="">{temperature(hour.temp)}</p>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="d-flex flex-row overflow-auto border-top border-bottom pb-2 pt-2">
      {renderHourly()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { hourly: state.weather.hourly };
};

export default connect(mapStateToProps)(HourlyWeather);
