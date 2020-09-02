require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const customers = require('./routes/api/Customers')
const tickets = require('./routes/api/Tickets')

const app = express();

app.use(express.json());

const DB = process.env.DB;

mongoose
  .connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

  app.use('/api/customers', customers);
  app.use('/api/tickets', tickets);

  if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    }))
  }

  const port = process.env.PORT || 5454;

  app.listen(port, () => console.log(`🌎 => Server started on port ${port}`));