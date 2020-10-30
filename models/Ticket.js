const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TicketSchema = new Schema ({

  ticketDate: {
    type: Date,
    required: true
  },
  ticketNum: {
    type: Number,
    required: true
  }, 
  ticketCust: {
    type: String
  },
  ticketCustStreet: {
    type: String
  },
  ticketCustCity: {
    type: String
  },
  ticketCustState: {
    type: String
  },
  ticketCustZip: {
    type: String
  },
  ticketMaterial: {
    type: String
  },
});

module.exports = Ticket = mongoose.model('ticket', TicketSchema);