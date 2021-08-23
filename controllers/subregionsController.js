const Subregion = require("../models/Subregion");

const getAllSubregions = async () => {
    return await Subregion.findAll();
}

const getSubregion = async (id) => {
    return await Subregion.findByPk(id);
}

const createSubregion = async (data) => {
    return await Subregion.create(data);
};

const updateSubregion = async (id, data) => {
    return await Subregion.update(data, {
        where: {
            id
        }
    });
}

const deleteSubregion = async (id, data) => {
    const subregion = await Subregion.findByPk(id);
    return await subregion.destroy();
}

module.exports = {
    createSubregion,
    getAllSubregions,
    getSubregion,
    updateSubregion,
    deleteSubregion
};