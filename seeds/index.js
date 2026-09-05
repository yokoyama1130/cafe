const mongoose = require("mongoose");
const Cafe = require("../models/cafes");
const cities = require("./cities");
const { descriptors, places } = require("./seedHelpers");

mongoose.connect('mongodb://localhost:27017/cafe')
    .then(() => {
        console.log("コネクションOK");
    })
    .catch((err) => {
        console.error("コネクションエラー");
        console.error(err);
    });

// 配列の中からランダム一個取り出す変数
const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)];
};

const randomCity = cities[Math.floor(Math.random() * cities.length)];

const seedDB = async () => {
    await Cafe.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const cafe = new Cafe({
            name: `${sample(descriptors)} ${sample.places}`,
            location: `${randomCity.prefecture} ${randomCity.city}`,
            description: "最高に良い場所",
            price: "3000~"
        });
        await cafe.save();
    }
};

seedDB().then(() => {
    mongoose.connection.close();
});
