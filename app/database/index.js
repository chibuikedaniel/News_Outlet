const { Sequelize } = require("sequelize");
const dataBase = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "mysql"
});

module.exports = {dataBase};