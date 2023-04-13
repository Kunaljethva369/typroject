const mongoose = require("mongoose");

const bookDetail = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    bookEmail: {
        type: String,
        required: true,
        unique: true
    }
});

const BookNow = new mongoose.model("BookNow", bookDetail);

module.exports = BookNow;