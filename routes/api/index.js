const router = require("express").Router();
const ticketRoutes = require("./Tickets");
const customerRoutes = require("./Customers");

// Ticket routes
router.use("/Tickets", ticketRoutes);
router.use("/Customers", customerRoutes);

module.exports = router;