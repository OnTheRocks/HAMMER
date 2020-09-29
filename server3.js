require('dotenv').config();
const express = require("express");

const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const DB = process.env.DB;
const PORT = process.env.PORT || 3030;

const customers = require('./routes/api/Customers')
const materials = require('./routes/api/Materials')
const tickets = require('./routes/api/Tickets')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);


// Connect to the Mongo DB
mongoose
  .connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

app.use('api/customers', customers);
app.use('/api/tickets', tickets);
app.use('/api/materials', materials);
