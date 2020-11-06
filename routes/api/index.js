const router = require("express").Router();
const ticketRoutes = require("./Tickets");

// Ticket routes
router.use("/tickets", ticketRoutes);

module.exports = router;
