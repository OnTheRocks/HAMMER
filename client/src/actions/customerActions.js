import axios from 'axios';
import { GET_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER, CUSTOMERS_LOADING} from './types';


export const getCustomers = () => dispatch => {
  dispatch(setCustomersLoading());
  axios
    .get('/api/customers')
    .then(res => dispatch({
      type: GET_CUSTOMERS,
      payload: res.data
    })
  )
};

export const addCustomer = (customer) => dispatch => {
  axios
  .post('/api/customers', customer)
  .then(res => 
    dispatch({
      type: ADD_CUSTOMER,
      payload: res.data
    })
    )
  
};

export const deleteCustomer = (id) => dispatch => {
  axios
  .delete(`/api/customers/${id}`)
  .then(res =>
    dispatch({
      type: DELETE_CUSTOMER,
      payload: id
    })
  )
};


export const setCustomersLoading = () => {
  return {
    type: CUSTOMERS_LOADING
  };
};