import { combineReducers } from 'redux';
import driverReducer from './driverReducer';
import customerReducer from './customerReducer';

export default combineReducers({
  driver: driverReducer,
  customer: customerReducer
});