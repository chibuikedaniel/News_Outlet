const User = require("../models/user.model");
const Post = require("../models/post.model");
const Category = require("../models/category.model");

const initdataBase = async() => {

    User.hasMany(Post)
    Post.belongsTo(User)

    Category.hasMany(Post)
    Post.belongsTo(Category)


    await Promise.all([
        User.sync({alter:false}),
        Post.sync({alter:false})
    ])
}

module.exports = {initdataBase};