const express = require('express');
const mongoose = require('mongoose');

const clients = require('./routes/api/clients');
const drivers = require('./routes/api/drivers');

const app = express();

app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db,{ useNewUrlParser: true, useUnifiedTopology: true } )
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  app.use('/api/clients', clients);
  app.use('/api/drivers', drivers);

const port = process.env.PORT || 5454;

app.listen(port, () => console.log(`Server started on port ${port}`));

