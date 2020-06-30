import { GET_CUSTOMERS, ADD_CUSTOMER, DELETE_CUSTOMER, CUSTOMERS_LOADING} from '../actions/types';

const initialState = {
  customers: [],
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        loading: false
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(customer => customer._id !== action.payload)
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [action.payload, ...state.customers]
      };
    case CUSTOMERS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}