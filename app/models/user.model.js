const {DataTypes } = require("sequelize");
const {dataBase} = require("../database/index");

const User = dataBase.define("user", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
        type:DataTypes.Hyperlink,
        allowNull: false,
    },
    SocialMedia: {
        type:DataTypes.Hyperlink,
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