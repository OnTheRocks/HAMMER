const express = require('express');
const router = express.Router();

const Client = require('../../models/Client')

// ---- route GET api/clients --------------
// ---- desc GET ALL Clients --------------
// ---- access Public --------------
router.get('/', (req, res) => {
  Client.find()
  .then(clients => res.json(clients))
});

// ---- route POST api/clients --------------
// ---- desc Creates a Client --------------
// ---- access Public --------------
router.post('/', (req, res) => {
  const newClient = new Client({
    name: req.body.name
});

  newClient.save().then(client => res.json(client));

});

// ---- route DELETE api/clients --------------
// ---- desc Deletes a Client --------------
// ---- access Public --------------
router.delete('/:id', (req, res) => {
    Client.findById(req.params.id)
    .then(client => client.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
  });
  

module.exports = router;