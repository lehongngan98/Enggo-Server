// models/newsModel.js
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },    
    image: { type: String, required: false },
    category:{ type: String, required: false },
    content: [{
        subTitle: { type: String, required: false },
        image: { type: String, required: false },
        text: { type: String, required: false }
    }],
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('News', newsSchema);
