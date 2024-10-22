// models/newsModel.js
const mongoose = require('mongoose');


const contentItemsTopicListen = new mongoose.Schema({
    text: { type: String, required: false },
  });


const ItemsTopicListen = new mongoose.Schema({   
    image: { type: String, required: false },
    title: { type: String, required: false },
    link: { type: String, required: false },
    content: [contentItemsTopicListen],
    createdAt: { type: Date, default: Date.now },
  });


const TopicListen = new mongoose.Schema({
    category: { type: String, required: true },
    background: { type: String, required: true },
    Items:[ItemsTopicListen],    
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('TopicListen', TopicListen);
