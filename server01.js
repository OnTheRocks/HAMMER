require('dotenv').config();
const DB = process.env.DB;
const port = process.env.PORT || 3030;

const express = require('express');
const mongoose = require('mongoose');
const app = require('express')();

const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// const customers = require('./routes/api/Customers')



mongoose
  .connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

  app.listen(port, () => console.log(`🌎 => Server started on port ${port}`));

  // app.use('api/customers', customers);


  
