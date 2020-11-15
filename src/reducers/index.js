import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import locationReducer from './locationReducer';
import tempScaleReducer from './tempScaleReducer';

export default combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  tempScale: tempScaleReducer,
});
