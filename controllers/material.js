const Material = require('../models/Material');

module.exports = {

  index: async (req, res, next) => {
    try {
    const materials = await Material.find({})
    res.status(200).json(materials);
    } catch(err) {
      next(err);
    }
  },

  newMaterial: async (req, res, next) => {
    try {
    const newMaterial = await Material(req.body);
    const material = await newMaterial.save();
    res.status(201).json(material);
      } catch(err) {
          next(err);
      }
  },

  getMaterial: async(req, res, next) => {
    try {
    const { materialID } = req.params;
    const material= await Material.findById(materialID);
    res.status(200).json(material);  
    } catch(err) {
        next(err);
    }
  },

  replaceMaterial: async(req, res, next) => {
    try {
    const { materialID } = req.params;
    const newMaterial = req.body;
    const result = await Material.findByIdAndUpdate(materialID, newMaterial);
    res.status(200).json({ Success: true });
    } catch(err) {
        next(err);
    }
  }, 

  updateMaterial: async(req, res, next) => {
    try {
    const { materialID } = req.params;
    const newMaterial = req.body;
    const result = await Material.findByIdAndUpdate(materialID, newMaterial);
    res.status(200).json({ Success: true });
    } catch(err) {
        next(err);
    }
  }

};