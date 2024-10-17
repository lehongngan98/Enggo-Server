// models/newsModel.js
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: false },
    category: { type: String, required: true },
    information: [{        
        subTitle: { type: String, required: true },
        image: { type: String, required: true },
        text: { type: String, required: true }
    }],
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('News', newsSchema);
