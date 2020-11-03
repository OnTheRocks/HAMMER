import axios from "axios";

export default { 
   // Gets all tickets
   getTickets: function() {
     return axios.get("/api/Tickets");
  },
  // Gets the ticket with the given id
  getTicket: function(id) {
    return axios.get("/Tickets/" + id);
  },
  
  // Deletes the ticket with the given id
  deleteTicket: function(id) {
    return axios.delete("/Tickets/" + id);
  },
  // Saves a ticket to the database
  saveTicket: function(ticketData) {
    return axios.post("/Tickets", ticketData);
  },
   // Gets all Customers
   getCustomers: function() {
     return axios.get("/Customers");
  },
  // Gets the customer with the given id
  getCustomer: function(id) {
    return axios.get("/Customers/" + id);
  }, 

  getCustLocations: function(id) {
    return axios.get("/Customers/" + id + "/locations");
  },
  
  
  // Deletes the customer with the given id
  deleteCustomer: function(id) {
    return axios.delete("/Customers/" + id);
  },
  // Saves a customer to the database
  saveCustomer: function(customerData) {
    return axios.post("/Customers", customerData);
  },
 // Gets all Materials
  getMaterials: function() {
    return axios.get("/Materials");
  },
  // Gets the Material with the given id
  getMaterial: function(id) {
    return axios.get("/Materials/" + id);
  },
  // Deletes the Material with the given id
  deleteMaterial: function(id) {
    return axios.delete("/materials/" + id);
  },
  // Saves a Material to the database
  saveMaterial: function(materialData) {
    return axios.post("/materials", materialData);
  },

};
