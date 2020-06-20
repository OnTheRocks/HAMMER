const express = require('express');
const router = express.Router();

const Driver = require('../../models/Driver')

// ---- route GET api/drivers --------------
// ---- desc GET ALL Drivers --------------
// ---- access Public --------------
router.get('/', (req, res) => {
  Driver.find()
  .then(drivers => res.json(drivers))
});

// ---- route POST api/drivers --------------
// ---- desc Creates a Driver --------------
// ---- access Public --------------
router.post('/', (req, res) => {
  const newDriver = new Driver({
    name: req.body.name,
    truckNo: req.body.truckNo
});

  newDriver.save().then(driver => res.json(driver));

});

// ---- route DELETE api/drivers --------------
// ---- desc Deletes a Driver --------------
// ---- access Public --------------
router.delete('/:id', (req, res) => {
    Driver.findById(req.params.id)
    .then(driver => driver.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
  });
  

module.exports = router;