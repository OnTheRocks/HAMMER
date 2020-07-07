const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  customerName: {
    type: String,
    required: true
  },
  customerStreet: {
    type: String
  },
  customerCity: {
    type: String
  },
  customerState: {
    type: String
  },
  customerZip: {
    type: String
  }
});

module.exports = Customer = mongoose.model('customer', CustomerSchema);