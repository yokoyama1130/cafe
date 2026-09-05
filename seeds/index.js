const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/cafe')
    .then(() => {
        console.log("コネクションOK");
    })
    .catch((err) => {
        console.error("コネクションエラー");
        console.error(err);
    });

