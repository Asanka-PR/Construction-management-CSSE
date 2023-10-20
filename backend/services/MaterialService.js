const Material = require("../models/Material.model");

class MaterialService {
  async addMaterial(materialData) {
    try {
      const material = new Material(materialData);
      const createMaterial = await material.save();
      return createMaterial;
    } catch (error) {
      throw error;
    }
  }

  async getMaterials() {
    try {
      const materials = await Material.find();
      return materials;
    } catch (error) {
      throw error;
    }
  }

  async getMaterial(id) {
    try {
      const material = await Material.findById(id);
      return material;
    } catch (error) {
      throw error;
    }
  }

  async updateMaterial(id, materialData) {
    try {
      const existingMaterial = await Material.findById(id);

      if (!existingMaterial) {
        throw new Error("There is no material to update");
      }

      const updatedMaterial = await Material.findByIdAndUpdate(id, materialData, { new: true });
      return updatedMaterial;
    } catch (error) {
      throw error;
    }
  }

  async removeMaterial(id) {
    try {
      const existingMaterial = await Material.findById(id);


      if (!existingMaterial) {
        throw new Error("There is no material to remove");
      }

      const removeMaterial = await Material.findByIdAndDelete(id);
      return removeMaterial;
    } catch (error) {
      throw error;
    }
  }

 
}

module.exports = new MaterialService();
