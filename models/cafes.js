const { name } = require("ejs");
const mongoose = require("mongoose");
const { Schema } = mongoose;

// スキーマ作成
const cafes = new Schema({
    name: String,
    location: String,
    description: String,
    price: String,
    image: String
});

module.exports = mongoose.model("Cafe", cafes, "cafes");