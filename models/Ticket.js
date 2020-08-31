const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TicketSchema = new Schema ({
  TicketDate: {
    type: Date,
    required: true 
  },
  TicketNum: {
    type: String,
    required: true
  },
  TicketCustName: {
    type: String,
    required: true
  },
  TicketBillingStreet: {
    type: String,
    required: true 
  }, 
  TicketBillingCity: {
    type: String,
    required: true
  },
  TicketBillingState: {
    type: String,
    required: true
  },
  TicketBillingZip: {
    type: String,
    required: true
  },
  TicketQuan: {
    type: String,
    required: true
  },
  TicketDescription: {
    type: String,
    required: true
  }, 
  TicketTare: {
    type: Number,
    required: true
  }, 
  TicketGross: {
    type: Number,
    required: true
  },
  TicketNet: {
    type: Number,
    required: true
  }
});

module.exports = Ticket = mongoose.model('ticket', TicketSchema);