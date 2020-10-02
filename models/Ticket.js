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
  }
});

module.exports = Ticket = mongoose.model('ticket', TicketSchema);