const Channel = require('../models/channelModel.js');

const getAllChannels = async (req, res) => {
    try {
        const channels = await Channel.find();
        res.status(200).json({
            status: 200,
            data: channels
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getChannelById = async (req, res) => {
    try {
        const channel = await Channel.findById(req.params.id);
        if (!channel) {
            return res.status(404).json({ message: "Channel not found" });
        }
        res.status(200).json({
            status: 200,
            data: channel,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createChannel = async (req, res) => {
    const channels = Array.isArray(req.body) ? req.body : [req.body];
    try {
        const newChannels = await Channel.insertMany(channels);        
        res.status(201).json({
            message: "Channel created successfully!",
            status: 201,
            data: newChannels,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateChannel = async (req, res) => {
    try {
        const updatedChannel = await Channel.findByIdAndUpdate(req.params.id, req.body);
        if (!updatedChannel) {
            return res.status(404).json({ message: 'Channel not found' });
        }
        res.status(200).json({
            message: 'Channel updated successfully',
            data: updatedChannel,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteChannel = async (req, res) => {
    try {
        const deletedChannel = await Channel.findByIdAndDelete(req.params.id);
        if (!deletedChannel) {
            return res.status(404).json({ message: 'Channel not found' });
        }
        res.status(200).json({
            status: 200,
            message: 'Channel deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllChannels,
    getChannelById,
    createChannel,
    updateChannel,
    deleteChannel
};