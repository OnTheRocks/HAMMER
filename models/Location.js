const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({

  // clID: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
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
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'customer'
  }
});

const Location = mongoose.model('location', LocationSchema);
module.exports = Location;