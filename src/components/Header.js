import React from 'react';
import { connect } from 'react-redux';
import SearchLocation from './SearchLocation';
import { toggleTempScale } from '../actions';

const Header = ({ tempScale, toggleTempScale }) => {
  const celsiusFontWeight = tempScale === 'celsius' ? 'bolder' : 'normal';
  const fahrenheitFontWeight = tempScale === 'fahrenheit' ? 'bolder' : 'normal';

  const onToggleTempScale = () => {
    toggleTempScale();
    console.log(tempScale);
  };
  return (
    <div className="header">
      <SearchLocation />
      <button onClick={onToggleTempScale}>
        <span style={{ fontWeight: celsiusFontWeight }}>°C</span> /{' '}
        <span style={{ fontWeight: fahrenheitFontWeight }}>°F</span>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { tempScale: state.tempScale };
};

export default connect(mapStateToProps, { toggleTempScale })(Header);
