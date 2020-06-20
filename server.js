require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const clients = require('./routes/api/clients');
const drivers = require('./routes/api/drivers');

const app = express();

app.use(express.json());

const DB = process.env.DB;

mongoose
  .connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true } )
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  app.use('/api/clients', clients);
  app.use('/api/drivers', drivers);

const port = process.env.PORT || 5454;

app.listen(port, () => console.log(`Server started on port ${port}`));

