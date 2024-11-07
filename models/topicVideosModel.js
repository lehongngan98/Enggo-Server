const mongoose = require('mongoose');

const itemsTopicVideos = new mongoose.Schema({
    image: { type: String, required: false },
    title: { type: String, required: false },
    videoId: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
});

const topicVideosModel = new mongoose.Schema({
    title: { type: String, required: true },
    background: { type: String, required: true },
    Items: [itemsTopicVideos],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('TopicVideos', topicVideosModel);