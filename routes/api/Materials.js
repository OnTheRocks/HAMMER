const express = require('express');
const router = express.Router();

const materialController = require('../../controllers/material')
const Material = require('../../models/Material');


router.route('/')
  .get(materialController.index)
  .post();


module.exports = router;


// // ---- route GET api/materials -------------
// // ---- desc GET ALL Materials --------------
// // ---- access Public ---------------------
// router.get('/', (req, res) => {
//   Material.find() 
//   .then(materials => res.json(materials))
// });

// // ---- route GET api/materials/:id -------------
// // ---- desc GET Material with given ID------
// // ---- access Public ---------------------
// router.get('/:id', (req, res) => {
//   Material.findById(req.params.id) 
//   .then(material => res.json(material))
// });

// // ---- route POST api/materials --------------
// // ---- desc Creates a Material --------------
// // ---- access Public --------------
// router.post('/', (req, res) => {
//   const newMaterial = new Material({
//     Name: req.body.materialName,
//     price: req.body.materialStreet,
//     notes: req.body.materialCity
// });

// newMaterail.save().then(material => res.json(material));

// });

// // ---- route DELETE apicustomers/:id --------
// // ---- desc Deletes a Customer --------------
// // ---- access Public --------------
// router.delete('/:id', (req, res) => {
//   Material.findById(req.params.id)
//     .then(material => material.remove().then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ success: false }));
//   });

  // app.use("/", async (req, res) => {
    // Material.deleteMany({})
    //   Material.create({
    //     name: 'Fill Sand',
    //     price: '$5'
    //   })
    //   Material.create({
    //     name: 'Rock',
    //     price: '$15'
    //   })
    // })

    


