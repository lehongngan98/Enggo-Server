const mongoose = require('mongoose');

const wordsSchema = new mongoose.Schema({
    word: { type: String, required: true },
    meaning: { type: String, required: true },
});

const  storySchema = new mongoose.Schema({
    nameVn: { type: String, required: true },
    nameEn: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    words:[wordsSchema],
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Story', storySchema);