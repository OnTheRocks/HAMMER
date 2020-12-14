require('dotenv').config();
const mongoose = require("mongoose");
const Customer = require("../models/Customer");
const Material = require("../models/Material");
const Ticket = require('../models/Ticket');



// This file empties the Material collection and inserts the following Materials:

const DB = process.env.DB;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const customerSeed = [
  {       
    "custName": "Concrete Industries",
    "custStreet": "111 JC St.",
    "custCity": "Garden City",
    "custState": "KS",
    "custZip" : "67846",
    "locations": [
      {
      "clName": "Concrete Industries - Ness City",
      "clStreet": "67560 T Rd.",
      "clCity": "Ness City",
      "clState": "KS",
      "clZip": "67560"
    },
    {
      "clName": "Concrete Industries - Scott City",
      "clStreet": "107 Glenn St",
      "clCity": "Scott City",
      "clState": "KS",
      "clZip": "67871",
    }]
  },
  {       
    "custName": "Ozinga",
    "custStreet": "2222 S Lumber St.",
    "custCity": "Chicago",
    "custState": "IL",
    "custZip" : "60616",
    "locations": []
  },
  {       
    "custName": "Lee Construction Inc.",
    "custStreet": "413 Campus Dr.",
    "custCity": "Garden City",
    "custState": "KS",
    "custZip" : "67846",
    "locations": []
  },
  {       
    "custName": "Dick Construction Inc.",
    "custStreet": "1805 E Mary St.",
    "custCity": "Garden City",
    "custState": "KS",
    "custZip" : "67846",
    "locations": [
    {
      "clName": "Dick Construction Inc. - New School",
      "clStreet": "2746 3rd St",
      "clCity": "Garden City",
      "clState": "KS",
      "clZip": "67846"
    },
    {
      "clName": "Dick Construction Inc. - Tyson Plant",
      "clStreet": "1832 Main St",
      "clCity": "Holcomb",
      "clState": "KS",
      "clZip": "67847",
   },
   {
      "clName": "Dick Construction Inc. - Colby Dairy",
      "clStreet": "594 Wolf Rd.",
      "clCity": "Colby",
      "clState": "KS",
      "clZip": "67863"
    }
    ]
  },
  {       
    "custName": "Dunlap Construction",
    "custStreet": "2006 N Commanche Dr",
    "custCity": "Garden City",
    "custState": "KS",
    "custZip" : "67846",
    "locations": []
  }
];

Customer
  Customer.deleteMany({})
  .then(() => Customer.collection.insertMany(customerSeed))
  .then(data => {
    console.log(data.result.n + " Customers added to the database!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  const materialSeed = [
    {       
      "name": "3/4 Crushed Rock",
      "price": "$45",
      "notes": " "
    },
    {       
      "name": "Oversized Rock",
      "price": "$10",
      "notes": "Large Rock over 2 inches."
    },
    {       
      "name": "Fill Sand",
      "price": "$15",
      "notes": "Fine sand."
    },
    {       
      "name": "Mason Sand",
      "price": "$25",
      "notes": "Clean fine sand."
    },
    {       
      "name": "Ice Control Sand",
      "price": "$15",
      "notes": "Ice to spread on icy roads."
    },
    {       
      "name": "Concrete Sand",
      "price": "$25",
      "notes": "Standard sand to mix into concrete."
    }
  ];
  
  Material
    Material.deleteMany({})
    .then(() => Material.collection.insertMany(materialSeed))
    .then(data => {
      console.log(data.result.n + " Materials added to the database!");
      // process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });

  const ticketSeed = [
  {       
    "ticketDate": "7/4/2020",
    "ticketNum": 12345,
    "ticketCust": "Concrete Industries",
    "ticketMaterial": "Mason Sand",
    "ticketTareWeight": 35000,
    "ticketGrossWeight": 85000,
    "ticketNetWeight": 50000
  },
  {       
    "ticketDate": "10/1/2020",
    "ticketNum": 12346,
    "ticketCust": "Dick Construction Inc.",
    "ticketMaterial": "Ice Control Sand",
    "ticketTareWeight": 35000,
    "ticketGrossWeight": 85000,
    "ticketNetWeight": 50000
  },
  {       
    "ticketDate": "10/2/2020",
    "ticketNum": 12347,
    "ticketCust": "Ozinga",
    "ticketMaterial": "Oversized Rock",
    "ticketTareWeight": 35000,
    "ticketGrossWeight": 85000,
    "ticketNetWeight": 50000
  },
  {       
    "ticketDate": "10/5/2020",
    "ticketNum": 12348,
    "ticketCust": "Lee Construction Inc.",
    "ticketMaterial": "Fill Sand",
    "ticketTareWeight": 35000,
    "ticketGrossWeight": 85000,
    "ticketNetWeight": 50000
  },
  {       
    "ticketDate": "10/10/2020",
    "ticketNum": 12349,
    "ticketCust": "Dunlap Construction",
    "ticketMaterial": "3/4 Crushed Rock",
    "ticketTareWeight": 35000,
    "ticketGrossWeight": 85000,
    "ticketNetWeight": 50000
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