const router = require("express").Router();
const ticketRoutes = require("../api/Tickets");

// Ticket routes
router.use("/Tickets", ticketRoutes);

module.exports = router;
