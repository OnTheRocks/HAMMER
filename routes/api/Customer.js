const express = require('express');
const router = express.Router();

const Customer = require('../../models/Customer')

// ---- route GET api/customers -------------
// ---- desc GET ALL Customers --------------
// ---- access Public ---------------------
router.get('/', (req, res) => {
  Customer.find() 
  .then(customers => res.json(customers))
});

// ---- route POST api/customers --------------
// ---- desc Creates a Customer --------------
// ---- access Public --------------
router.post('/', (req, res) => {
  const newCustomer = new Customer({
    customerName: req.body.customerName,
    customerStreet: req.body.customerStreet,
    customerCity: req.body.customerCity,
    customerState: req.body.customerState,
    customerZip: req.body.customerZip
});

newCustomer.save().then(customer => res.json(customer));

});

// ---- route DELETE api/customers --------------
// ---- desc Deletes a Customer --------------
// ---- access Public --------------
router.delete('/:id', (req, res) => {
  Customer.findById(req.params.id)
    .then(customer => customer.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
  });





module.exports = router;