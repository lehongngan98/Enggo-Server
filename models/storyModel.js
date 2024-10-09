const mongoose = require('mongoose');


const  storySchema = new mongoose.Schema({
    nameVn: { type: String, required: true },
    nameEn: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Story', storySchema);