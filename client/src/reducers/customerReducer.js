import { v4 as uuidv1 } from "uuid";
import { GET_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER} from '../actions/types';

const initialState = {
  customers: [
    { id: uuidv1(), name: 'Plains Readymix'},
    { id: uuidv1(), name: 'Concrete Industries'},
    { id: uuidv1(), name: 'Garden City Ready Mix Inc.'},
    { id: uuidv1(), name: 'Lee Construction'}      
  ]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CUSTOMERS:
      return {
        ...state
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(customer => customer.id !== action.payload)
      }
    default:
      return state;
  }
}