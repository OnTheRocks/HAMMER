const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  eMail: {
    type: String
  },
  password: {
    type: String
  }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;