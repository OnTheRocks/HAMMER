const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
  name: String,
  price: String,
  notes: String
})

module.exports = Material = mongoose.model('material', MaterialSchema);