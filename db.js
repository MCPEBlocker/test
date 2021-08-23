const { Sequelize } = require('sequelize');
const db = new Sequelize('test', 'mcpeblocker', 'Minecraft11004', {
    host: 'localhost',
    dialect: 'mysql',
    sync: true
});

module.exports = db;