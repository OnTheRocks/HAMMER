require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
const path = require('path')

const port = process.env.PORT || 3030;

const customers = require('./routes/api/Customers');
const materials = require('./routes/api/Materials');
const tickets = require('./routes/api/Tickets');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get('/*', (req, res) => {
//   let url = path.join(__dirname, '../client/build', 'index.html');
//   if (!url.startsWith('/app/')) // we're on local windows
//     url = url.substring(1);
//   res.sendFile(url);
// });

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/build/index.html'));
// });


// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
//   app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
//   });
// }

// else {
//   app.use(express.static(path.join(__dirname, '/client/public')));
//   app.get("/*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"));
//   });
// }


const DB = process.env.DB;

app.use(routes);
// app.use('/', customers);/
app.use('/api/customers', customers);
app.use('/materials', materials)
app.use('/tickets', tickets)

//-------------- Connect to Mongo ----------------
mongoose
  .connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));
  
app.listen(port, () => console.log(`🌎 => API Server started on port ${port}`));