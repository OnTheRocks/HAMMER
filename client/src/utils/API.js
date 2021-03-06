import axios from "axios";

export default { 
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
  },
   // Gets all Customers
   getCustomers: function() {
     return axios.get("/api/Customers");
  },
  // Gets the customer with the given id
  getCustomer: function(id) {
    return axios.get("/api/Customers/" + id);
  }, 

  getCustLocations: function(id) {
    return axios.get("/api/Customers/" + id + "/locations");
  },
  
  
  // Deletes the customer with the given id
  deleteCustomer: function(id) {
    return axios.delete("/api/Customers/" + id);
  },
  // Saves a customer to the database
  saveCustomer: function(customerData) {
    return axios.post("/api/Customers", customerData);
  },
 // Gets all Materials
  getMaterials: function() {
    return axios.get("/api/Materials");
  },
  // Gets the Material with the given id
  getMaterial: function(id) {
    return axios.get("/api/Materials/" + id);
  },
  // Deletes the Material with the given id
  deleteMaterial: function(id) {
    return axios.delete("/api/materials/" + id);
  },
  // Saves a Material to the database
  saveMaterial: function(materialData) {
    return axios.post("/api/materials", materialData);
  },

};
