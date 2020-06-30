require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const clients = require('./routes/api/clients');
const drivers = require('./routes/api/drivers');
const customers = require('./routes/api/customers');

const app = express();

app.use(express.json());

// const DB = process.env.DB;
const DB = require('./config/keys').mongoURI;

mongoose
  .connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true } )
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  app.use('/api/clients', clients);
  app.use('/api/drivers', drivers);
  app.use('/api/customers', customers);

  // Serve static assets if in production
  if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(espress.static('client/build'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port = process.env.PORT || 5454;

app.listen(port, () => console.log(`Server started on port ${port}`));

