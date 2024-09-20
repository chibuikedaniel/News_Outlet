const {DataTypes } = require("sequelize");
const {dataBase} = require("../database/index");

const Post = dataBase.define("Post", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    views: {
        type: DataTypes.INTEGER,
    },
    comments: {
        type: DataTypes.INTEGER,
    },
    readTime: {
        type:DataTypes.STRING,
    },
    shares: {
        type: DataTypes.INTEGER,
    },
    bannerImage: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    tags: {
        type:DataTypes.TEXT,
        allowNull: false,
    },
},{
    tableName: "posts",
    timestamps: true,
});


module.exports = Post;