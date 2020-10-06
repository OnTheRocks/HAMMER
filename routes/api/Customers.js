const express = require('express');
const router = express.Router();

const customerController = require('../../controllers/customer');

router.route('/')
  .get(customerController.index)
  .post(customerController.newCustomer);

  router.route('/:customerID')
  .get(customerController.getCustomer)
  .put(customerController.replaceCustomer)
  .patch(customerController.updateCustomer)

  router.route('/:customerID/Locations')
  .get(customerController.getCustLocation)
  .post(customerController.newCustLocation);

  module.exports = router;























// const express = require('express');
// const router = express.Router();

// const customerController = require('../../controllers/customer')

// const Customer = require('../../models/Customer');

// router.route('/')
//   .get(customerController.index)
//   .post(customerController.newCustomer);

// router.route('/:customerID')
//   // .get(customerController.getCustomer)
// //   .put(customerController.replaceCustomer)
// //   .patch(customerController.updateCustomer);

// // router.route('/:customerID/locations')
// //   .get(customerController.getCustomerLocations)

// module.exports = router;