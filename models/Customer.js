const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({

  custName: {
    type: String,
    required: true
  },
  custStreet: {
    type: String
  },
  custCity: {
    type: String
  },
  custState: {
    type: String
  },
  custZip: {
    type: String
  },
  custLocation: [{
    clName: {
      type: String
    },
    clStreet: {
      type: String
    },
    clCity: {
      type: String
    }, 
    clState: {
      type: String
    }, 
    clZip: {
      type: String
    }    
  }]
});

module.exports = Customer = mongoose.model('customer', CustomerSchema);