import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import locationReducer from './locationReducer';

export default combineReducers({
  weather: weatherReducer,
  location: locationReducer,
});
