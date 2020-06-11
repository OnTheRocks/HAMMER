const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  truckNo: {
    type: String
  }
});

module.exports = Driver = mongoose.model('driver', DriverSchema);