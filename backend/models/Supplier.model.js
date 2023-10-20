const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  supplierId: String,
  companyName: String,
  name: String,
  address: String,
  suppliedMaterialInfo: String,
  phone: String,
  email: String,
  password: String,
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;
