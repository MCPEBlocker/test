const db = require("../db");
const Region = require("../models/Region");
const Subregion = require("../models/Subregion");

const initDatabase =  async () => {
    Region.hasMany(Subregion);
    Subregion.belongsTo(Region);
    try {
        await db.authenticate();
        console.log(`Connected to the database`);
    } catch (err) {
        console.log('Unable to connect to the database');
        throw err;
    }
    // try {
    //     await db.sync({ force: true });
    // } catch (err) {
    //     console.log('Unable to synchronize models');
    //     console.error(err);
    // }
}

module.exports = initDatabase;