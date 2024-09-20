const { DataTypes } = require("sequelize");
const { dataBase } = require("../database/index");

const Category = dataBase.define("Category", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
}, {
    tableName: "categories",
    timestamps: true
});

module.exports = Category