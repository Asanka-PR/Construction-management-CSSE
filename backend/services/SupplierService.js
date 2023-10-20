const Supplier = require("../models/Supplier.model");

class SupplierService {
  async addSupplier(supplierData) {
    try {
      const supplier = new Supplier(supplierData);
      const createdSupplier = await supplier.save();
      return createdSupplier;
    } catch (error) {
      throw error;
    }
  }

  async getSuppliers() {
    try {
      const suppliers = await Supplier.find();
      return suppliers;
    } catch (error) {
      throw error;
    }
  }

  async getSupplier(id) {
    try {
      const supplier = await Supplier.findById(id);
      return supplier;
    } catch (error) {
      throw error;
    }
  }

  async updateSupplier(id, supplierData) {
    try {
      const existingSupplier = await Supplier.findById(id);

      if (!existingSupplier) {
        throw new Error("There is no supplier to update");
      }

      const updatedSupplier = await Supplier.findByIdAndUpdate(id, supplierData, { new: true });
      return updatedSupplier;
    } catch (error) {
      throw error;
    }
  }

  async removeSupplier(id) {
    try {
      const existingSupplier = await Supplier.findById(id);

      if (!existingSupplier) {
        throw new Error("There is no supplier to remove");
      }

      const removedSupplier = await Supplier.findByIdAndDelete(id);
      return removedSupplier;
    } catch (error) {
      throw error;
    }
  }

  async validateSupplier(name, password) {
    try {
      const foundUser = await Supplier.findOne({ name });

      if (!foundUser) {
        throw new Error("Invalid user");
      } else if (foundUser.password === password) {
        return true;
      } else {
        throw new Error("Incorrect password");
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new SupplierService();
