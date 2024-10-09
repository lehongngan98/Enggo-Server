// models/newsModel.js
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: false },
    category: { type: String, required: true },
    information: [{
        titleEn: {
            type: String,
            required: true
        },
        titleVn: {
            type: String,
            required: true
        },
        subTitleEn_1: {
            type: String,
            required: true
        },
        subTitleVn_1: {
            type: String,
            required: true
        },
        image_1: {
            type: String,
            required: true
        },
        iconTranslate: {
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
        }

    }],
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('News', newsSchema);
