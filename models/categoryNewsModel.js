const mongoose = require('mongoose');

const categoryNewsSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('CategoryNews', categoryNewsSchema);
