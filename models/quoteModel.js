const mongoose = require("mongoose");


const wordSchema = new mongoose.Schema({
    word: { type: String, required: true },
    pronunciation: { type: String, required: true },
    meaning: { type: String, required: true },
    type: { type: String, required: true },
});



const quoteSchema = new mongoose.Schema({
    author: { type: String, required: true },
    text: { type: String, required: true },    
    words: [wordSchema],
});

module.exports = mongoose.model("Quote", quoteSchema);
