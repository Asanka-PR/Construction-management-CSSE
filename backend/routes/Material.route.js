const express = require("express");
const router = express.Router();

const {
  addMaterial,
  getMaterials,
  getMaterial,
  updateMaterial,
  removeMaterial
} = require("../controllers/Material.controller");

router.post("/", addMaterial);

router.get("/", getMaterials);

router.get("/:id", getMaterial);

router.put("/:id", updateMaterial);

router.delete("/:id", removeMaterial);



module.exports = router;
