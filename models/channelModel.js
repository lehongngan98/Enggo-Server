const mongoose = require('mongoose');


const channelSchema = new mongoose.Schema({
    channelId:{type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Channel = mongoose.model('Channel', channelSchema);
module.exports = Channel;