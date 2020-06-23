import { v4 as uuid }from 'uuid';
import { GET_DRIVERS, ADD_DRIVER, DELETE_DRIVER} from '../actions/types';

const initialState = {
  drivers: [
    { id: uuid(), name: 'Nathan Huber', truckNo: 'N8'},
    { id: uuid(), name: 'Henry Huber', truckNo: 'H10'},
    { id: uuid(), name: 'Erick Huber', truckNo: 'H20'},
    { id: uuid(), name: 'Christopher Huber', truckNo: 'H13'},
    { id: uuid(), name: 'Rick Huber', truckNo: 'H11'},
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_DRIVERS:
      return {
        ...state
      };
    case DELETE_DRIVER:
      return {
        ...state,
        drivers: state.drivers.filter(driver => driver.id !== action.payload)
      }
    default:
      return state;
  }
}