const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Cafe = require("./models/cafes");

mongoose.connect('mongodb://localhost:27017/cafe')
    .then(() => {
        console.log("コネクションOK");
    })
    .catch((err) => {
        console.error("コネクションエラー");
        console.error(err);
    });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// これがないとres.bodyをsendできない
app.use(express.urlencoded({extended: true}));

app.get("/cafes", async (req, res) => {
    const cafes = await Cafe.find({});
    res.render("cafe/index", { cafes });
});

// カフェ詳細ページのルーティング
app.get("/cafes/:id", async (req, res) => {
    const cafe = await Cafe.findById(req.params.id);
    res.render("cafe/show", { cafe });
});

app.listen(8080, () => {
    console.log("ポート8080でサーバー起動");
});