require('dotenv').config();
const mongoose = require("mongoose");
const Material = require("../models/Material");


// This file empties the Material collection and inserts the following Materials:

const DB = process.env.DB;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const materialSeed = [

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