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
  },
  // Gets all tickets
  getTickets: function() {
    return axios.get("/api/Tickets");
  },
  // Gets the ticket with the given id
  getTicket: function(id) {
    return axios.get("/api/Tickets/" + id);
  },
  // Deletes the ticket with the given id
  deleteTicket: function(id) {
    return axios.delete("/api/Tickets/" + id);
  },
  // Saves a ticket to the database
  saveTicket: function(ticketData) {
    return axios.post("/api/Tickets", ticketData);
  }


};
