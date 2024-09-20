const express = require("express");
require('dotenv').config();
const path = require("path");
const {initdataBase} = require("../app/database/init");
const seedRecords = require("./seed/index.seed");
const postSeedRecords = require("./seed/post.seed");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));





app.get("/", (req, res) => {
    try {
        return res.render("pages/home", { blogPosts: [] });
    } catch (e) {
        return res.render("pages/404", { message: e.message });
    }
});

app.get("/seed-data", async (req, res) => {
    try {
        
        if(process.env.ENVIRONMENT == "dev"){
            await seedRecords();
            await postSeedRecords();
            console.log("Running")
        }
        return res.json({message:"Seed Worked"});
    } catch (e) {
        console.log(e)
        return res.render("pages/404", { message: e.message });
    }
})






app.get("/post/:id", (req, res) => {
    try {
        const blogPosts = []
        const postId = req.params.id;
        let postData = blogPosts.filter((post) => (post.id == postId));
        if (postData.length == 0) {
            return res.render("pages/404", { message: "Post does not exist" });
        }
        const post = postData[0]
        return res.render("pages/post", { post });
    } catch (e) {
        return res.render("pages/404", { message: e.message });
    }
})


app.listen(PORT, async() => {
    await initdataBase();
    console.log("listening to PORT" + PORT)
})