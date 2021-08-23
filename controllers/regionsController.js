const Region = require("../models/Region");

const getAllRegions = async () => {
    return await Region.findAll();
}

const getRegion = async (id) => {
    return await Region.findByPk(id);
}

const createRegion = async (data) => {
    return await Region.create(data);
};

const updateRegion = async (id, data) => {
    return await Region.update(data, {
        where: {
            id
        }
    });
}

const deleteRegion = async (id, data) => {
    const region = await Region.findByPk(id);
    return await region.destroy();
}

module.exports = {
    createRegion,
    getAllRegions,
    getRegion,
    updateRegion,
    deleteRegion
};