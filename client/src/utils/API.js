import axios from "axios";

export default {
  // Gets all Materials
  getMaterials: function() {
    return axios.get("api/materials");
  },
  // Gets the Material with the given id
  getMaterial: function(id) {
    return axios.get("/api/materials/" + id);
  },
  // Deletes the Material with the given id
  deleteMaterial: function(id) {
    return axios.delete("/api/materials/" + id);
  },
  // Saves a Material to the database
  saveMaterial: function(materialData) {
    return axios.post("/api/materials", materialData);
  }
};
