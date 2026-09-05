const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("cafe/index");
});

app.listen(8080, () => {
    console.log("ポート8080でサーバー起動");
});