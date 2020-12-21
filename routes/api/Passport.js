const express = require('express');
const router = express.Router();

const passportController = require('../../controllers/passport');

router.route('/')
  .get(passportController.index)

  
  module.exports = router;