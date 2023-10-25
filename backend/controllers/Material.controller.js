const materialService = require("../services/MaterialService");

/**
 * Add a material to the database.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const addMaterial = (req, res) => {
    // Destructure request body
    const {
        materialId,
        materialName,
        Price,
        supplierName,
        materialType,
        quantity,
    } = req.body;

    // Call the materialService to add the material to the database
    materialService
        .addMaterial({
            materialId,
            materialName,
            Price,
            supplierName,
            materialType,
            quantity,
        })
        .then((createMaterial) => {
            res.json(createMaterial);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};




/**
 * Get a list of materials from the database.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getMaterials = (req, res) => {
    // Call the materialService to retrieve materials
    materialService
        .getMaterials()
        .then((materials) => {
            res.json(materials);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};




/**
 * Get a material by its ID.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const getMaterial = (req, res) => {
    // Extract material ID from request parameters
    const matId = req.params.id;

    // Call the materialService to retrieve a specific material
    materialService
        .getMaterial(matId)
        .then((material) => {
            res.json(material);
        })
        .catch((error) => {
            res.status(400).json(error);
        });
};




/**
 * Update a material in the database.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const updateMaterial = (req, res) => {
    // Extract material ID from request parameters and destructure request body
    const matId = req.params.id;
    const {
        materialId,
        materialName,
        Price,
        supplierName,
        materialType,
        quantity,
    } = req.body;

    // Call the materialService to update the material
    materialService
        .updateMaterial(matId, {
            materialId,
            materialName,
            Price,
            supplierName,
            materialType,
            quantity,
        })
        .then((updatedMat) => {
            res.status(200).json(updatedMat);
        })
        .catch((error) => {
            res.status(400).json(error.message);
        });
};





/**
 * Remove a material from the database by its ID.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const removeMaterial = (req, res) => {
    // Extract material ID from request parameters
    const matId = req.params.id;

    // Call the materialService to remove the material
    materialService
        .removeMaterial(matId)
        .then((removeMat) => {
            res.status(200).json(removeMat);
        })
        .catch((error) => {
            res.status(400).json(error.message);
        });
};





/**
 * Search for materials based on a given key.
 *
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const searchMaterial = async (req, res) => {
    try {
        // Extract search key from request parameters
        const searchKey = req.params.key;

        // Call the materialService to search for materials
        const material = await materialService.searchProducts(searchKey);
        res.json(material);
    } catch (err) {
        res.status(500).send({
            status: "Error with Search Product",
            error: err.message,
        });
    }
};




//exports all the functions

module.exports = {
    addMaterial,
    getMaterials,
    getMaterial,
    updateMaterial,
    removeMaterial,
    searchMaterial,
};
