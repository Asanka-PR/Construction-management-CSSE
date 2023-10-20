const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
  materialId: String,
  materialName: String,
  Price: String,
  supplierName: String,
  materialType: String,
  quantity:String
 
});

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
