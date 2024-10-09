const storyModel = require('../models/storyModel');


const getAllStory = async (req, res) => {
    try {
        const Story = await storyModel.find();
        res.status(200).json({
            status: 200,
            data: Story
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createStory = async (req, res) => {
    const stories = Array.isArray(req.body) ? req.body : [req.body];

    try {
        const newStories = await storyModel.insertMany(stories);
        res.status(201).json({
            status: 201,
            data: newStories
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




const deleteStory = async (req, res) => {
    try {
        const Story = await storyModel.findByIdAndDelete(req.params.id);
        if (!Story) {
            return res.status(404).json({
                message: 'Story not found'
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Story deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateStory = async (req, res) => {
    try {
        const Story = await storyModel.findByIdAndUpdate(req.params.id, req.body);
        if (!Story) {
            return res.status(404).json({ message: 'Story article not found' });
        }
        res.status(200).json({
            status: 200,
            message: 'Story updated successfully'
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getStoryById = async (req, res) => {
    try {
        const Story = await storyModel.findById(req.params.id);
        if (!Story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.status(200).json({
            status: 200,
            data: Story
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllStory,
    createStory,
    deleteStory,
    updateStory,
    getStoryById
}