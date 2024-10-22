const mongoose = require('mongoose');

const categoryTopicListen = new mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('CategoryTopicListen', categoryTopicListen);
