require('dotenv').config();
const mongoose = require("mongoose");
const Customer = require("../models/Customer");


// This file empties the Customer collection and inserts the following Customers:

const DB = process.env.DB;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const customerSeed = [
  {       
    "custName": "Concrete Industries",
    "custStreet": "111 JC St.",
    "custCity": "Garden City",
    "custState": "KS",
    "custZip" : "67846",
    "locations": ['5f7bfa929b9b6a21a9a8bc09', '5f7bfdb612808c2141a498ee' ]
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
    "locations": []
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
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });