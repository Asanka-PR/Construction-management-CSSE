const supplierService = require("../services/SupplierService");



const addSupplier = (req, res) => {
  const {supplierId,companyName, name, address,suppliedMaterialInfo, phone, email, password } = req.body;

  

  supplierService.addSupplier({supplierId,companyName, name, address,suppliedMaterialInfo, phone, email, password })
  .then((createdSupplier) => {
      res.json(createdSupplier);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const getSuppliers = (req, res) => {
  supplierService
    .getSuppliers()
    .then((suppliers) => {
      res.json(suppliers);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};


const getSupplier = (req, res) => {
  const supId = req.params.id;

  supplierService
    .getSupplier(supId)
    .then((supplier) => {
      res.json(supplier);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

const updateSupplier = (req, res) => {
  const supId = req.params.id;
  const {supplierId,companyName, name, address,suppliedMaterialInfo, phone, email, password } = req.body;

  supplierService
    .updateSupplier(supId, {supplierId,companyName, name, address,suppliedMaterialInfo, phone, email, password })
    .then((updatedSup) => {
      res.status(200).json(updatedSup);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
};

const removeSupplier = (req, res) => {
  const supId = req.params.id;

  supplierService
    .removeSupplier(supId)
    .then((removedSup) => {
      res.status(200).json(removedSup);
    })
    .catch((error) => {
      res.status(400).json(error.message);
    });
};




const validateSupplier = (req, res) => {
  const supName = req.body.name;
  const pass = req.body.password;

  supplierService
    .validateSupplier(supName, pass)
    .then((result) => {
      if (result === true) {
        res.status(200).json(true);
      } else {
        res.status(404).json(result);
      }
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

module.exports = {
  addSupplier,
  validateSupplier,
  getSupplier,
  getSuppliers,
  updateSupplier,
  removeSupplier,
};
