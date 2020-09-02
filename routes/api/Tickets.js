const express = require('express');
const router = express.Router();

const Ticket = require('../../models/Ticket');

// ---- route GET api/tickets -------------
// ---- desc GET ALL Tickets --------------
// ---- access Public ---------------------
router.get('/', (req, res) => {
  Ticket.find()
  .then(tickets => res.json(tickets))
});

// ---- route POST api/tickets --------------
// ---- desc Creates a Ticket --------------
// ---- access Public --------------
router.post('/', (req, res) => {
  const newTicket = new Ticket({
    TicketDate: req.body.TicketDate,
    TicketNum: req.body.TicketNum,
    TicketCustName: req.body.TicketCustName,
    TicketBillingStreet: req.body.TicketBillingStreet,
    TicketBillingCity: req.body.TicketBillingCity,
    TicketBillingState: req.body.TicketBillingState,
    TicketBillingZip: req.body.TicketBillingZip,
    TicketQuan: req.body.TicketQuan,
    TicketDescription: req.body.TicketDescription,
    TicketTare: req.body.TicketTare,
    TicketGross: req.body.TicketGross,
    TicketNet: req.body.TicketNet
});

newTicket.save().then(ticket => res.json(ticket));

});

// ---- route DELETE api/Tickets  --------------
// ---- desc Deletes a Ticket --------------
// ---- access Public --------------
router.delete('/:id', (req, res) => {
  Ticket.findById(req.params.id)
    .then(ticket => ticket.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
  });

module.exports = router;
