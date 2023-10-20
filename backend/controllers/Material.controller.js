const materialService = require("../services/MaterialService");



const addMaterial = (req, res) => {
  const {materialId,materialName, Price, supplierName,materialType, quantity } = req.body;

  

  materialService.addMaterial({materialId,materialName, Price, supplierName,materialType, quantity })
  .then((createMaterial) => {
      res.json(createMaterial);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

 const getMaterials = (req, res) => {
    materialService.getMaterials()
    .then((materials) => {
      res.json(materials);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};


const getMaterial = (req, res) => {
  const matId = req.params.id;

  materialService
    .getMaterial(matId)
    .then((material) => {
      res.json(material);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const updateMaterial = (req, res) => {
    const matId = req.params.id;
    const {materialId,materialName, Price, supplierName,materialType, quantity } = req.body;

  materialService
    .updateMaterial(matId, {materialId,materialName, Price, supplierName,materialType, quantity })
    .then((updatedMat) => {
      res.status(200).json(updatedMat);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
};

const removeMaterial = (req, res) => {
 const matId = req.params.id;

 materialService
    .removeMaterial(matId)
    .then((removeMat) => {
      res.status(200).json(removeMat);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
};






module.exports = {
  addMaterial,
  getMaterials,
  getMaterial,
  updateMaterial,
  removeMaterial,
};
