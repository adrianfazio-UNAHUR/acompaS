const { Sequelize } = require('sequelize');
const { database } = require('../app/config');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
    host: database.host,
    dialect: "mysql"
}
);

module.exports = sequelize;