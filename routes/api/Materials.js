const express = require('express');
const router = express.Router();

const materialController = require('../../controllers/material');

router.route('/')
  .get(materialController.index)
  .post(materialController.newMaterial);

  router.route('/:materialID')
  .get(materialController.getMaterial)
  .put(materialController.replaceMaterial)
  .patch(materialController.updateMaterial)
  .delete(materialController.removeMaterial);

module.exports = router;
