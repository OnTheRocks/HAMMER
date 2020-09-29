const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TicketSchema = new Schema ({
  // _id: {
  //   type: String,
  //   required: true
  // },
  ticketDate: {
    type: {Date, default: Date.now},
    required: true
  },
  ticketNum: {
    type: Number,
    required: true
  },
  custName: {type: Schema.Types.ObjectId, ref: 'customer'},

  
  material: {type: Schema.Types.ObjectId, ref: 'material'}

});

module.exports = Ticket = mongoose.model('ticket', TicketSchema);