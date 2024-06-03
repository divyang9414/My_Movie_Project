const mongoose = require("mongoose")

const db = async () => {
    await mongoose.connect("mongodb://localhost:27017/Movie");
    console.log("Data base is connected");
}

module.exports = db;