const Material = require("../models/Material.model");

class MaterialService {
    
  
  // Adds a new material to the database.
    async addMaterial(materialData) {
        try {
            const material = new Material(materialData);
            const createMaterial = await material.save();
            return createMaterial;
        } catch (error) {
            throw error;
        }
    }

    
    
    
    // Retrieves a list of all materials from the database.
    async getMaterials() {
        try {
            const materials = await Material.find();
            return materials;
        } catch (error) {
            throw error;
        }
    }

   
   
    // Retrieves a specific material by its ID.
    async getMaterial(id) {
        try {
            const material = await Material.findById(id);
            return material;
        } catch (error) {
            throw error;
        }
    }

   
    
    // Updates an existing material in the database.
    async updateMaterial(id, materialData) {
        try {
            const existingMaterial = await Material.findById(id);

            if (!existingMaterial) {
                throw new Error("There is no material to update");
            }

            const updatedMaterial = await Material.findByIdAndUpdate(
                id,
                materialData,
                { new: true }
            );
            return updatedMaterial;
        } catch (error) {
            throw error;
        }
    }

    
    
    // Removes a material from the database by its ID.
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

    
    
    
    // Searches for materials based on a search key.
    async searchProducts(searchKey) {
        try {
            const material = await Material.find({
                $or: [
                    {
                        materialId: { $regex: searchKey },
                    },
                    {
                        materialName: { $regex: searchKey },
                    },
                    {
                        supplierName: { $regex: searchKey },
                    },
                ],
            });
            return material;
        } catch (error) {
            throw new Error("Error with Search Product: " + error.message);
        }
    }
}






module.exports = new MaterialService();
