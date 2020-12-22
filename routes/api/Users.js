const express = require('express');
const router = express.Router();

const userController = require('../../controllers/user');

router.route('/Register')
  .get(userController.index)

  
  module.exports = router;