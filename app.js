const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("確認");
});

app.listen(8080, () => {
    console.log("ポート8080でサーバー起動");
});