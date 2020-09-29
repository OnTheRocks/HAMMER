const express = require('express');
const router = express.Router();

const Ticket = require('../../models/Ticket');

Ticket.deleteMany({})
    Ticket.create({
      // _id: "1",
      ticketNum: 156459,
      ticketDate: 12/25/1999,
      // custName: Customer.findOne({custName: 'HuberReadyMix'}),
      // material: Material.findOne({name: 'Fill Sand'}) 
    });

    Ticket.create({
    //  _id: "2",
     ticketNum: 16549,
     ticketDate: 12/25/1999,
    //  custName: Customer.findOne({custName: 'HuberReadyMix'}),
    //  material: Material.findOne({name: 'Rock'}) 
    });





module.exports = router;