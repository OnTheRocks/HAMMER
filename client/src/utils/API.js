import axios from "axios";

export default {
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
   // Gets all tickets
   getTickets: function() {
     return axios.get("/Tickets");
  },
  // Gets the ticket with the given id
  getTicket: function(id) {
    return axios.get("Tickets/" + id);
  },
  
  // Deletes the ticket with the given id
  deleteTicket: function(id) {
    return axios.delete("/Tickets/" + id);
  },
  // Saves a ticket to the database
  saveTicket: function(ticketData) {
    return axios.post("/Tickets", ticketData);
  },
};
