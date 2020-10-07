require('dotenv').config();
const mongoose = require("mongoose");
const Material = require("../models/Material");


// This file empties the Material collection and inserts the following Materials:

const DB = process.env.DB;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const materialSeed = [
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
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });