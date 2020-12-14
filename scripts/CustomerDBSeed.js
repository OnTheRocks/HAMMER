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
    }]
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