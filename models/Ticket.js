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
  ticketDeliveryInfo: {
    type: String
  },
  // ticketCustStreet: {
  //   type: String
  // },
  // ticketCustCity: {
  //   type: String
  // },
  // ticketCustState: {
  //   type: String
  // },
  // ticketCustZip: {
  //   type: String
  // },
  ticketMaterial: {
    type: String
  },
  ticketTareWeight: {
    type: Number
  },
  ticketGrossWeight: {
    type: Number
  },
  ticketNetWeight: {
    type: Number
  },
});

module.exports = Ticket = mongoose.model('ticket', TicketSchema);