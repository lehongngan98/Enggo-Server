const mongoose = require('mongoose');

const categoryTopicVideos = new mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('CategoryTopicVideos', categoryTopicVideos);