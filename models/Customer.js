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
  locations: [{
    type: Schema.Types.ObjectId,
    ref: 'location'
  }]
});

const Customer = mongoose.model('customer', CustomerSchema);
module.exports = Customer;