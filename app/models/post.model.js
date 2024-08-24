const {DataTypes } = require("sequelize");
const {dataBase} = require("../database/index");

const Post = dataBase.define("post", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type:DataTypes.TEXT,
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
        type:DataTypes.Hyperlink,
        allowNull: false,
    },
    tags: {
        type:DataTypes.STRING,
        allowNull: false,
    },
},{
    tableName: "posts",
    timestamps: true,
});