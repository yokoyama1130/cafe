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

app.get("/cafes", async (req, res) => {
    const cafes = await Cafe.find({});
    res.render("cafe/index", { cafes });
});

app.listen(8080, () => {
    console.log("ポート8080でサーバー起動");
});