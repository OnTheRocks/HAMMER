import { GET_DRIVERS, ADD_DRIVER, DELETE_DRIVER} from './types';

export const getDrivers = () => {
  return {
    type: GET_DRIVERS
  };
};

export const deleteDriver = id => {
  return {
    type: DELETE_DRIVER,
    payload: id
  };
};