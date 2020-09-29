const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  // _id: {
  //   type: String,
  //   required: true
  // },
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
  custLocations: [{
    type: Schema.Types.ObjectId,
    ref: 'location'
  }]
});

module.exports = Customer = mongoose.model('customer', CustomerSchema);