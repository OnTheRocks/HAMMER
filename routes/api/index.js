const router = require("express").Router();
const ticketRoutes = require("./Tickets");
const customerRoutes = require("./Customers");
const materialRoutes = require("./Materials");

// Ticket routes
router.use("/Tickets", ticketRoutes);
router.use("/Customers", customerRoutes);
router.use("/Materials", materialRoutes);

module.exports = router;