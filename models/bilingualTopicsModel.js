const mongoose = require('mongoose');

const subTopicSchema = new mongoose.Schema({
    titleEn: {
        type: String,
        required: true
    },
    titleVn: {
        type: String,
        required: true
    },
    textEn: {
        type: String,
        required: true
    },
    textVn: {
        type: String,
        required: true
    },
    createdAt: { type: Date, default: Date.now },
});



const bilingualTopicsSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    subTopic: [subTopicSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('BilingualTopics', bilingualTopicsSchema);