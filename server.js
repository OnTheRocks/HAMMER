require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();

const port = process.env.PORT || 3030;

const customers = require('./routes/api/Customers')
const materials = require('./routes/api/Materials')
const tickets = require('./routes/api/Tickets')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const DB = process.env.DB;

app.use('/', customers);
app.use('/customers', customers);
app.use('/materials', materials)

 

mongoose
  .connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));



  
app.listen(port, () => console.log(`🌎 => Server started on port ${port}`));
  
    

// app.use('api/customers', customers);
// app.use('/api/tickets', tickets);
// app.use('/api/materials', materials);

  // res.json({

    // customers: await Customer.find(),
    // tickets: await Ticket.find(),

    // tickets2: await Ticket.find().populate("material"),
    // tickets3: await Ticket.find().populate("custName"),
    // tickets4: await Ticket.find().populate("material").populate("custName")

  // })
  
// })




  
