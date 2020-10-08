const express = require('express');
const router = express.Router();

const ticketController = require('../../controllers/ticket');

router.route('/')
  .get(ticketController.index)
  .post(ticketController.newTicket);

router.route('/:ticketID')
  .get(ticketController.getTicket)
  .put(ticketController.replaceTicket)
  .patch(ticketController.updateTicket)
  .delete(ticketController.deleteTicket);

module.exports = router;