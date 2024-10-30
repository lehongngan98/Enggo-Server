const TopicVideos = require('../models/topicVideosModel');

const getAllTopicVideos = async (req, res) => {
    try {
        const topicVideos = await TopicVideos.find();
        res.status(200).json({
            status: 200,
            data: topicVideos,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTopicVideosById = async (req, res) => {
    try {
        const topicVideos = await TopicVideos.findById(req.params.id);
        if (!topicVideos) {
            return res.status(404).json({ message: "TopicVideos not found" });
        }
        res.status(200).json({
            status: 200,
            data: topicVideos,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const addTopicVideos = async (req, res) => {
    const topicVideos = Array.isArray(req.body) ? req.body : [req.body];
    try {
        const newTopicVideos = await TopicVideos.insertMany(topicVideos);
        res.status(201).json({
            status: 201,
            data: newTopicVideos,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteTopicVideos = async (req, res) => {
    try {
        const topicVideos = await TopicVideos.findByIdAndDelete(req.params.id);
        if (!topicVideos) {
            return res.status(404).json({ message: 'TopicVideos not found' });
        }
        res.status(200).json({
            status: 200,
            message: 'TopicVideos deleted successfully'
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTopicVideos = async (req, res) => {
    try {
        const topicVideo = await TopicVideos.findByIdAndUpdate(req.params.id, req.body);
        if (!topicVideo) {
          return res.status(404).json({ message: 'topicVideo article not found' });
        }
        res.status(200).json({
          status: 200,
          message: 'topicVideo updated successfully',          
        });
    
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};


module.exports = {
    getAllTopicVideos,
    getTopicVideosById,
    addTopicVideos,
    deleteTopicVideos,
    updateTopicVideos
}