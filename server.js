require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
// const passport = require('passport');
// const path = require('path')

const port = process.env.PORT || 3030;

const customers = require('./routes/api/Customers');
const materials = require('./routes/api/Materials');
const tickets = require('./routes/api/Tickets');

// const initalizePassport = require('./passport.config');
// initalizePassport(
//   passport,
//   email => users.find(user => user.email === email), 
//   id => users.find(user => user.id === id)
// )


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const DB = process.env.DB;

app.use(routes);

app.use('/api/customers', customers);
app.use('/api/materials', materials);
app.use('/api/tickets', tickets);

//---Registration/Login Routes -----------


//-------------- Connect to Mongo ----------------
mongoose
  .connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));
  
app.listen(port, () => console.log(`🌎 => API Server started on port ${port}`));