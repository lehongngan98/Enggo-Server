const TopicListenModel = require('../models/TopicListenModel');
const CategoryTopicListenModel = require('../models/categoryTopicListen');

const getAllTopicListen = async (req, res) => {
    try {
        const topicListen = await TopicListenModel.find();
        res.status(200).json({
            status: 200,
            data: topicListen,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTopicListenById = async (req, res) => {
    try {
        const topicListen = await TopicListenModel.findById(req.params.id);
        if (!topicListen) {
            return res.status(404).json({ message: "TopicListen not found" });
        }
        res.status(200).json({
            status: 200,
            data: topicListen,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createTopicListen = async (req, res) => {
    const topicListens = Array.isArray(req.body) ? req.body : [req.body];

    try {
        
        for (const topic of topicListens) {
            const existingTopic = await TopicListenModel.findOne({ category: topic.category });
            if (existingTopic) {
                return res.status(400).json({
                    message: `TopicListen with category ${topic.category} already exists.`,
                });
            }
        }
        
        const newTopicListen = await TopicListenModel.insertMany(topicListens);
        res.status(201).json({
            status: 201,
            data: newTopicListen,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteTopicListen = async (req, res) => {
    try {
        const topicListen = await TopicListenModel.findByIdAndDelete(req.params.id);
        if (!topicListen) {
            return res.status(404).json({ message: 'TopicListen not found' });
        }
        res.status(200).json({
            status: 200,
            message: 'TopicListen deleted successfully'
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTopicListen = async (req, res) => {
    try {
        const topicListen = await TopicListenModel.findByIdAndUpdate(req.params.id, req.body);
        if (!topicListen) {
          return res.status(404).json({ message: 'topicListen article not found' });
        }
        res.status(200).json({
          status: 200,
          message: 'topicListen updated successfully',          
        });
    
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};


module.exports = {
    getAllTopicListen,
    getTopicListenById,
    createTopicListen,
    deleteTopicListen,
    updateTopicListen,
};
        