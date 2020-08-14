import axios from "axios";

export default {
  // Gets all customers
  getCustomers: function() {
    return axios.get("/api/customers");
  },
  // Gets the customer with the given id
  getCustomer: function(id) {
    return axios.get("/api/customers/" + id);
  },
  // Deletes the customer with the given id
  deleteCustomer: function(id) {
    return axios.delete("/api/customers/" + id);
  },
  // Saves a customer to the database
  saveCustomer: function(customerData) {
    return axios.post("/api/customers", customerData);
  }
};
