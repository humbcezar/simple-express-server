const mongoose = require("mongoose");

before(async function(){
    await mongoose.connect(process.env.DB_HOST, {
        useNewUrlParser: true,
        dbName: process.env.DB_TEST_DATABASE
    });
});