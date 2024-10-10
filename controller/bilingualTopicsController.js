const BilingualTopics = require('../models/bilingualTopicsModel');

const getAllBilingualTopics = async (req, res) => {
    try {
        const bilingualTopics = await BilingualTopics.find();
        res.status(200).json({
            status: 200,
            data: bilingualTopics
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBilingualTopicById = async (req, res) => {
    try {
        const bilingualTopic = await BilingualTopics.findById(req.params.id);
        if (!bilingualTopic) {
            return res.status(404).json({ message: "Bilingual Topic not found" });
        }
        res.status(200).json({
            status: 200,
            data: bilingualTopic,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBilingualTopic = async (req, res) => {
    const bilingualTopics = Array.isArray(req.body) ? req.body : [req.body];
    try {
        const newBilingualTopics = await BilingualTopics.insertMany(bilingualTopics);
        res.status(201).json({
            status: 201,
            data: newBilingualTopics,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateBilingualTopic = async (req, res) => {
    try {
        const updatedBilingualTopic = await BilingualTopics.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedBilingualTopic) {
            return res.status(404).json({ message: 'Bilingual topic not found' });
        }
        res.status(200).json({
            message: 'Bilingual topic updated successfully',
            data: updatedBilingualTopic,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteBilingualTopic = async (req, res) => {
    try {
        const deletedBilingualTopic = await BilingualTopics.findByIdAndDelete(req.params.id);
        if (!deletedBilingualTopic) {
            return res.status(404).json({ message: 'Bilingual topic not found' });
        }
        res.status(200).json({ message: 'Bilingual topic deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBilingualTopics,
    getBilingualTopicById,
    createBilingualTopic,
    updateBilingualTopic,
    deleteBilingualTopic
};