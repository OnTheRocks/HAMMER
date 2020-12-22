const router = require("express").Router();
const ticketRoutes = require("./Tickets");
const customerRoutes = require("./Customers");
const materialRoutes = require("./Materials");
const userRoutes = require("./Users");

// Routes
router.use("/Tickets", ticketRoutes);
router.use("/Customers", customerRoutes);
router.use("/Materials", materialRoutes);
router.use("/Users", userRoutes);

module.exports = router;