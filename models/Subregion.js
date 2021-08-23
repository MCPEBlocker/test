const { DataTypes } = require("sequelize");
const db = require("../db");

const Subregion = db.define('Subregion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Subregion;