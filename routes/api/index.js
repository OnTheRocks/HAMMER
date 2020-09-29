const router = require("express").Router();
const customerRoutes = require("./customers");

// Customer routes
router.use("/customers", customerRoutes);

module.exports = router;
