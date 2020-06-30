import { GET_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER} from './types';

export const getCustomers = () => {
  return {
    type: GET_CUSTOMERS
    
  };
};

export const deleteCustomer = (id) => {
  return {
    type: DELETE_CUSTOMER,
    payload: id

  };
};