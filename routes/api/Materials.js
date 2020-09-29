const express = require('express');
const router = express.Router();

const materialController = require('../../controllers/material')
const Material = require('../../models/Material');


router.route('/')
  .get(materialController.index)
  .post(materialController.newMaterial);

  router.route('/:materialID')
  .get(materialController.getMaterial)


module.exports = router;

