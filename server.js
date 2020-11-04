require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();

const port = process.env.PORT || 3030;

const customers = require('./routes/api/Customers');
const materials = require('./routes/api/Materials');
const tickets = require('./routes/api/Tickets');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const DB = process.env.DB;

// app.use('/', customers);/
app.use('/customers', customers);
app.use('/materials', materials)
app.use('/api/tickets', tickets)

mongoose
  .connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));



  
app.listen(port, () => console.log(`🌎 => Server started on port ${port}`));