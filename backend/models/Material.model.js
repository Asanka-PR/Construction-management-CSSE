const mongoose = require("mongoose");



const materialSchema = new mongoose.Schema({
  materialId: String,     // The unique identifier for the material.
  materialName: String,   // The name of the material.
  Price: String,          // The price of the material.
  supplierName: String,   // The name of the supplier.
  materialType: String,   // The type or category of the material.
  quantity: String        // The quantity or stock level of the material.
});



// Create a Mongoose model named "Material" using the schema.
const Material = mongoose.model("Material", materialSchema);


module.exports = Material;
