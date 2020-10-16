require('dotenv').config();
const mongoose = require("mongoose");
const Ticket = require('../models/Ticket');

// This file empties the Material collection and inserts the following Materials:

const DB = process.env.DB;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const ticketSeed = [
  {       
    "ticketDate": "7/4/2020",
    "ticketNum": 12345,
    "ticketCust": "Concrete Industries"
  },
  {       
    "ticketDate": "10/1/2020",
    "ticketNum": 12346,
    "ticketCust": "Dick Construction Inc."
  },
  {       
    "ticketDate": "10/2/2020",
    "ticketNum": 12347,
    "ticketCust": "Ozinga"
  },
  {       
    "ticketDate": "10/5/2020",
    "ticketNum": 12348,
    "ticketCust": "Lee Construction Inc."
  },
  {       
    "ticketDate": "10/10/2020",
    "ticketNum": 12349,
    "ticketCust": "Dunlap Construction"
  },
  
];

Ticket
  Ticket.deleteMany({})
  .then(() => Ticket.collection.insertMany(ticketSeed))
  .then(data => {
    console.log(data.result.n + " Tickets added to the database!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });