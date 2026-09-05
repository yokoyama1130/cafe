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

// 新規登録画面へ遷移するルーティング
app.get("/cafes/new", (req, res) => {
    res.render("cafe/new");
});

// ポストリクエスト
app.post("/cafes/new", async (req, res) => {
    const cafe = new Cafe({
        name: req.body.cafe.name,
        price: req.body.cafe.price
    });
    await cafe.save();
    res.redirect(`/cafes/${cafe._id}`);
});

// カフェ詳細ページのルーティング
app.get("/cafes/:id", async (req, res) => {
    const cafe = await Cafe.findById(req.params.id);
    res.render("cafe/show", { cafe });
});

app.listen(8080, () => {
    console.log("ポート8080でサーバー起動");
});