const {DataTypes } = require("sequelize");
const {dataBase} = require("../database/index");

const User = dataBase.define("user", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fullname: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        type:DataTypes.TEXT,
        allowNull: false,
    },
    thumbnail: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    SocialMedia: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user',
    },
},{
    tableName: "users",
    timestamps: true,
});

module.exports = User;